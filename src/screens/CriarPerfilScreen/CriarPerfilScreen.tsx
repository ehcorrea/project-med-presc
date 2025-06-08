import { useCallback, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { router } from 'expo-router';
import { yupResolver } from '@hookform/resolvers/yup';

import { ProfileType } from '@/types/profile';
import {
  Button,
  HeaderPublic,
  Input,
  Line,
  ModalOptions,
  Spancing,
  Text,
} from '@/components';
import { NewProfileValidator, validatorNewProfile } from '@/utils/form/';
import { profileStore } from '@/stores';
import { createProfile } from '@/factories';

import { ButtonAdd } from './components/ButtonAdd';
import { ButtonRemove } from './components/ButtonRemove';

import * as S from './CriarPerfilScreen.styles';

export function CriarPerfilScreen() {
  const [modalProfile, setModalProfile] = useState(false);
  const { setProfile } = profileStore();
  const scrollRef = useRef<ScrollView>(null);
  const { control, setFocus, handleSubmit, setValue, watch } = useForm({
    resolver: yupResolver(validatorNewProfile),
    defaultValues: { type: ProfileType.PERSONAL, dependents: [{}] },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'dependents',
    control,
  });

  const profileType = watch('type');

  const handleSelectProfileType = (profile: ProfileType) => {
    setValue('type', profile.toString());
  };

  const handleAddDependent = useCallback(() => {
    append({}, { shouldFocus: false });
    const timeOut = setTimeout(() => {
      scrollRef.current?.scrollToEnd({ animated: true });
      clearTimeout(timeOut);
    }, 100);
  }, [append]);

  const handleFocus = (field: string, callback?: () => void) => () => {
    callback?.();
    setFocus(field as never);
  };

  const handleAddProfile = (data: NewProfileValidator) => {
    const { profiles, selectedId } = createProfile(data);
    setProfile(profiles, selectedId);
    router.replace('/home');
  };

  return (
    <>
      <HeaderPublic>
        <Button.Back />
      </HeaderPublic>
      <ScrollView
        bounces={false}
        className="flex-1"
        contentContainerStyle={{ padding: '5%' }}
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
      >
        <Text.Title size="xhuge">Criar Perfil</Text.Title>
        <Spancing y="8" />
        <Text size="xlarge">Perfil pessoal</Text>
        <Spancing y="4" />
        <Controller
          name="name"
          control={control}
          render={({
            field: { onChange, ...props },
            fieldState: { error },
          }) => (
            <Input
              label="Nome"
              accessibilityLabel={`inserir seu nome`}
              placeholder="Nome completo ou apelido"
              error={error?.message}
              onChangeText={onChange}
              onFocus={handleFocus('name')}
              {...props}
            />
          )}
        />
        <Spancing y="4" />
        <Controller
          name="type"
          control={control}
          render={({
            field: { onChange, ...props },
            fieldState: { error },
          }) => (
            <Input
              accessibilityLabel="inserir tipo do perfil"
              editable={false}
              error={error?.message}
              forceHasFocus={modalProfile}
              label="Tipo de Perfil"
              onFocus={() => setModalProfile(true)}
              placeholder="Pessoal ou Cuidador"
              pointerEvents="none"
              {...props}
            />
          )}
        />
        <Spancing y="8" />
        {profileType === ProfileType.CAREGIVING && (
          <View>
            <Line />
            <Spancing y="8" />
            <Text size="xlarge">Dependentes</Text>
            <Spancing y="10" />
            {fields.map((field, index) => (
              <View className="flex-row flex-1 w-[100%] " key={field.id}>
                <S.ContainerInput isFirstItem={!index}>
                  <Controller
                    name={`dependents.${index}.name`}
                    control={control}
                    render={({
                      field: { onChange, value, ...props },
                      fieldState: { error },
                    }) => (
                      <Input
                        label="Nome"
                        accessibilityLabel={`inserir nome do dependente ${index + 1}`}
                        placeholder="Nome completo ou apelido"
                        error={error?.message}
                        onChangeText={onChange}
                        onFocus={handleFocus(`dependents.${index}.name`)}
                        {...props}
                      />
                    )}
                  />
                </S.ContainerInput>
                {!!index && <ButtonRemove onPress={() => remove(index)} />}
              </View>
            ))}
            <Spancing y="5" />
            <ButtonAdd onPress={handleAddDependent} />
            <Spancing y="15" />
          </View>
        )}
        <Button
          elevation
          className="w-[60%] self-center"
          onPress={handleSubmit(handleAddProfile)}
        >
          CRIAR
        </Button>
        <ModalOptions
          title="Selecione o tipo de PERFIL"
          values={[
            { title: ProfileType.PERSONAL, value: ProfileType.PERSONAL },
            { title: ProfileType.CAREGIVING, value: ProfileType.CAREGIVING },
          ]}
          open={modalProfile}
          onClose={() => setModalProfile(false)}
          onSelect={handleSelectProfileType}
        />
      </ScrollView>
    </>
  );
}
