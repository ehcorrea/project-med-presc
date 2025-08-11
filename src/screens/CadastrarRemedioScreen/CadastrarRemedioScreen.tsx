import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { yupResolver } from '@hookform/resolvers/yup';

import { MedicationMeasures, MedicationType } from '@/types/medication';
import {
  addMedicationValidators,
  getValuesFromEnum,
  splitTimer,
  pluralize,
  MedicationValidators,
  onCreateTriggerNotification,
} from '@/utils';

import {
  Button,
  HeaderScreen,
  Input,
  Layout,
  ModalConfirm,
  ModalOptions,
  ModalTimer,
  Spancing,
  Text,
} from '@/components';
import { medicationStore, profileStore } from '@/stores';
import { createMedication } from '@/factories';

export function CadastrarRemedioScreen() {
  const { profileId, medicationId } = useLocalSearchParams<{
    profileId: string;
    medicationId?: string;
  }>();
  const { setMedicationData: saveMedication, getMedicationByProfileId } =
    medicationStore();
  const getProfile = profileStore((state) => state.getProfile);
  const [modalTimer, setModalTimer] = useState(false);
  const [modalType, setModalType] = useState(false);
  const [modalMeasures, setModalMeasures] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [formState, setFormState] = useState<MedicationValidators>();

  const medication = getMedicationByProfileId(profileId).find(
    ({ id }) => medicationId === id
  );

  const { control, setValue, handleSubmit, clearErrors, watch, setFocus } =
    useForm({
      resolver: yupResolver(addMedicationValidators),
      defaultValues: {
        type: 'TABLET',
        measure: 'MG',
        ...(medication && {
          name: medication.name,
          measure: medication.measure,
          observation: medication.observation,
          quantity: String(medication.quantity),
          type: medication.type,
          interval: `${medication.interval.hr}:${medication.interval.min}`,
        }),
      },
    });

  const type = getValuesFromEnum(MedicationType, watch('type'));
  const quantity = watch('quantity')?.padStart(2, '0');
  const measure = pluralize(
    quantity,
    getValuesFromEnum(MedicationMeasures, watch('measure'))
  );

  const handleConfirmInterval = (hr: string, min: string) => {
    setValue('interval', `${hr}:${min}`);
    clearErrors('interval');
  };

  const handleSelectType = (type: string) => {
    setValue('type', type);
    clearErrors('type');
  };

  const handleMeasures = (measure: string) => {
    setValue('measure', measure);
    clearErrors('measure');
  };

  const handleAdd = (data: MedicationValidators) => {
    setFormState(data);
    setModalConfirm(true);
  };

  const handleConfirm = async () => {
    if (formState) {
      const profile = getProfile(profileId);
      const medication = createMedication(formState, profile, medicationId);
      await onCreateTriggerNotification(medication, profile);
      saveMedication(profileId, medication);
      router.back();
    }
  };

  const handleFocus = (field: string, callback?: () => void) => () => {
    callback?.();
    setFocus(field as never);
  };

  return (
    <Layout>
      <HeaderScreen
        title={medication ? 'Editar Medicamento' : 'Cadastrar Medicamento'}
      />
      <SafeAreaView className="flex-1">
        <View className="px-[5%] pb-[5%] flex-1">
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            <Text>
              {medication ? 'Edite' : 'Informe'} detalhes sobre os medicamentos
              prescritos, como intervalo de uso e instruções.
            </Text>
            <Spancing y="8" />
            <Text size="xlarge">Medicamento</Text>
            <Spancing y="4" />
            <View className="flex-row">
              <View className="flex-1">
                <Controller
                  name="name"
                  control={control}
                  render={({
                    field: { onChange, ...props },
                    fieldState: { error },
                  }) => (
                    <Input
                      accessibilityLabel="inserir nome do medicamento"
                      error={error?.message}
                      label="Nome"
                      onChangeText={onChange}
                      onFocus={handleFocus('name')}
                      placeholder="Ex: Paracetamol"
                      {...props}
                    />
                  )}
                />
              </View>
              <Spancing x="3" />
              <View className="flex-1">
                <Controller
                  name="type"
                  control={control}
                  render={({
                    field: { onChange, value: _, ...props },
                    fieldState: { error },
                  }) => (
                    <Input
                      accessibilityLabel="inserir tipo do medicamento"
                      editable={false}
                      error={error?.message}
                      forceHasFocus={modalType}
                      label="Tipo"
                      onChangeText={onChange}
                      onFocus={handleFocus('type', () => setModalType(true))}
                      pointerEvents="none"
                      value={type}
                      {...props}
                    />
                  )}
                />
              </View>
            </View>
            <Text size="xlarge">Instruções</Text>
            <Spancing y="4" />
            <Controller
              name="interval"
              control={control}
              render={({
                field: { onChange, value, ...props },
                fieldState: { error },
              }) => (
                <Input
                  accessibilityLabel="inserir intervalo de uso"
                  editable={false}
                  error={error?.message}
                  forceHasFocus={modalTimer}
                  label="Intervalo"
                  onChangeText={onChange}
                  onFocus={handleFocus('interval', () => setModalTimer(true))}
                  placeholder="a cada xx:xx"
                  pointerEvents="none"
                  value={value ? `A cada ${value}` : undefined}
                  {...props}
                />
              )}
            />
            <View className="flex-row">
              <View className="flex-1">
                <Controller
                  name="quantity"
                  control={control}
                  render={({
                    field: { onChange, ...props },
                    fieldState: { error },
                  }) => (
                    <Input
                      accessibilityLabel="inserir quantidade"
                      error={error?.message}
                      keyboardType="numeric"
                      label="Quantidade"
                      onFocus={handleFocus('quantity')}
                      onChangeText={onChange}
                      placeholder="1, 4, 6..."
                      maxLength={4}
                      {...props}
                    />
                  )}
                />
              </View>
              <Spancing x="3" />
              <View className="flex-1">
                <Controller
                  name="measure"
                  control={control}
                  render={({
                    field: { onChange, value: _, ...props },
                    fieldState: { error },
                  }) => (
                    <Input
                      accessibilityLabel="inserir tipo de medida"
                      editable={false}
                      error={error?.message}
                      forceHasFocus={modalMeasures}
                      label="Medida"
                      onChangeText={onChange}
                      onFocus={handleFocus('measure', () =>
                        setModalMeasures(true)
                      )}
                      pointerEvents="none"
                      value={measure}
                      {...props}
                    />
                  )}
                />
              </View>
            </View>
            <Controller
              name="observation"
              control={control}
              render={({
                field: { onChange, ...props },
                fieldState: { error },
              }) => (
                <Input
                  accessibilityLabel={`inserir seu nome`}
                  containerProps={{
                    style: { height: 'auto' },
                  }}
                  error={error?.message}
                  label="Observação"
                  maxLength={128}
                  multiline
                  numberOfLines={4}
                  onChangeText={onChange}
                  onFocus={handleFocus('observation')}
                  placeholder="Ex: ficar me jejum após ingerir..."
                  {...props}
                />
              )}
            />

            <Button
              className="w-[60%] self-center"
              onPress={handleSubmit(handleAdd)}
            >
              SALVAR
            </Button>
          </ScrollView>
        </View>
      </SafeAreaView>
      <ModalTimer
        onClose={() => setModalTimer(false)}
        onConfirm={handleConfirmInterval}
        open={modalTimer}
        defaultValue={medication?.interval}
      />
      <ModalOptions
        onClose={() => setModalType(false)}
        onSelect={handleSelectType}
        open={modalType}
        title="Selecione um tipo"
        values={Object.entries(MedicationType).map(([value, title]) => ({
          title,
          value,
        }))}
      />
      <ModalOptions
        onClose={() => setModalMeasures(false)}
        onSelect={handleMeasures}
        open={modalMeasures}
        title="Selecione a medida"
        values={Object.entries(MedicationMeasures).map(([value, title]) => ({
          title: `${quantity || ''} ${pluralize(quantity, title)}`,
          value,
        }))}
      />
      <ModalConfirm
        onClose={() => setModalConfirm(false)}
        onConfirm={handleConfirm}
        open={!!modalConfirm}
        title="Confirmar Medicamento"
      >
        <View className="p-[5%] min-h-[160px] justify-between">
          <View>
            <Text size="large">Informações gerais</Text>
            <Spancing y="2" />
            <Text size="medium" palette="black">
              Usar a cada {splitTimer(formState?.interval)} {'\n'}
              {quantity} {measure} de {formState?.name.trim()} em {type}
              {!!formState?.observation &&
                `${'\n'}Obs: ${formState.observation}`}
              .
            </Text>
          </View>
          <Spancing y="8" />
          <View>
            <Text size="large">Notificações</Text>
            <Spancing y="2" />
            <Text palette="black">
              Você será notificado uma vez a cada{' '}
              {splitTimer(formState?.interval)}.
            </Text>
          </View>
        </View>
      </ModalConfirm>
    </Layout>
  );
}
