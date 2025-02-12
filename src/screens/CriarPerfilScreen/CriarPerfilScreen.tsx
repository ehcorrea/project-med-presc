import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useCallback, useRef, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { ProfileType } from '@/types/profile';
import {
  Button,
  Input,
  Line,
  ModalOptions,
  Spancing,
  Text,
} from '@/components';
import { NewProfileValidator, validatorNewProfile } from '@/utils/form/';

import * as S from './CriarPerfilScreen.styles';
import { profileStore } from '@/stores';
import { router } from 'expo-router';
import { createProfile } from '@/factories';

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

  const handleFocus = (field: string) => () => {
    setFocus(field as never);
  };

  const handleAddProfile = (data: NewProfileValidator) => {
    const { profiles, selectedId } = createProfile(data);
    setProfile(profiles, selectedId);
    router.replace('/home');
  };

  return (
    <>
      <S.Header>
        <Button.Back />
      </S.Header>
      <ScrollView
        bounces={false}
        className="flex-1"
        contentContainerStyle={{ padding: '5%' }}
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
      >
        <Text.Title size="xhuge">Criar Perfil</Text.Title>
        <Spancing y={8} />
        <Text size="xlarge">Perfil pessoal</Text>
        <Spancing y={4} />
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
              placeholder="Nome Completo"
              error={error?.message}
              onChangeText={onChange}
              {...props}
            />
          )}
        />
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
              onFocus={() => setModalProfile(true)}
              pointerEvents="none"
              error={error?.message}
              label="Tipo de Perfil"
              placeholder="Pessoal ou Cuidador"
              {...props}
            />
          )}
        />
        <Spancing y={8} />
        {profileType === ProfileType.CAREGIVING && (
          <View>
            <Line />
            <Spancing y={8} />
            <Text size="xlarge">Dependentes</Text>
            <Spancing y={10} />
            {fields.map((field, index) => (
              <View className="flex-row flex-1 w-[100%]" key={field.id}>
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
                        placeholder="Nome Completo"
                        error={error?.message}
                        onChangeText={onChange}
                        onFocus={handleFocus(`dependents.${index}.nome`)}
                        {...props}
                      />
                    )}
                  />
                </S.ContainerInput>
                {!!index && (
                  <TouchableOpacity
                    onPress={() => remove(index)}
                    className="flex-1 items-end justify-center"
                  >
                    <S.IconRemove />
                  </TouchableOpacity>
                )}
              </View>
            ))}
            <Spancing y={5} />
            <TouchableOpacity
              onPress={handleAddDependent}
              className="flex-row items-center"
            >
              <S.LineAdd />
              <S.IconAdd />
              <S.LineAdd />
            </TouchableOpacity>
            <Spancing y={15} />
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
          title="Selecione um tipo de perfil"
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
