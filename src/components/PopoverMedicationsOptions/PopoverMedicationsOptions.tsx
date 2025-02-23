import { useState } from 'react';
import { View } from 'react-native';
import { PublicPopoverProps } from 'react-native-popover-view/dist/Popover';
import { router } from 'expo-router';
import Popover, { PopoverPlacement } from 'react-native-popover-view';

import { medicationStore, profileStore } from '@/stores';
import { Medication } from '@/types/medication';

import { Line } from '../Line/Line';
import { ModalConfirm } from '../ModalConfirm/ModalConfirm';
import { Spancing } from '../Spacing/Spacing';
import { Text } from '../Text/Text';

import * as S from './PopoverMedicationsOptions.styles';

export type PopoverMedicationsOptionsProps = PublicPopoverProps & {
  onClose?: () => void;
  medication?: Medication;
};

export function PopoverMedicationsOptions({
  medication,
  onClose,
  ...props
}: PopoverMedicationsOptionsProps) {
  const [modalRemove, setModalRemove] = useState(false);
  const selected = profileStore((state) => state.selected!);
  const deleteMedication = medicationStore((state) => state.deleteMedication!);

  const handleModalRemove = () => {
    setModalRemove((prevState) => !prevState);
  };

  const handleEditMedication = () => {
    if (medication) {
      router.push({
        pathname: `/remedios/cadastrar/[profileId]`,
        params: { medicationId: medication.id, profileId: selected.id },
      });
      onClose?.();
    }
  };

  const handleRemoveMedication = () => {
    if (medication) {
      deleteMedication(selected.id, medication.id);
    }
    onClose?.();
  };

  return (
    <>
      <Popover
        {...props}
        placement={PopoverPlacement.LEFT}
        onRequestClose={onClose}
        backgroundStyle={{ opacity: 1, backgroundColor: 'transparent' }}
        popoverStyle={{ elevation: 5, borderRadius: 10 }}
        isVisible={props.isVisible && !modalRemove}
      >
        <S.Button onPress={handleEditMedication}>
          <Text>Editar</Text>
        </S.Button>
        <Line />
        <S.Button>
          <Text>Modificar Alerta</Text>
        </S.Button>
        <Line />
        <Spancing y={2} />
        <View className="p-[10px]">
          <S.ButtonAlert onPress={handleModalRemove}>
            <Text className="self-center" palette="white" weight="semi">
              Remover
            </Text>
          </S.ButtonAlert>
        </View>
      </Popover>
      <ModalConfirm
        title={`Remover ${medication?.name}`}
        open={modalRemove}
        onClose={handleModalRemove}
        onConfirm={handleRemoveMedication}
        alert
      >
        <Text className="my-[10%] text-center">
          Esta ação não poderá ser desfeita e também {'\n'}removerá as
          notificações associadas.
        </Text>
      </ModalConfirm>
    </>
  );
}
