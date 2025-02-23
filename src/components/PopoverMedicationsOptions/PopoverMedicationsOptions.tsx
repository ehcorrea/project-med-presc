import { PublicPopoverProps } from 'react-native-popover-view/dist/Popover';
import { View } from 'react-native';
import Popover, { PopoverPlacement } from 'react-native-popover-view';
import { router } from 'expo-router';

import { profileStore } from '@/stores';
import { Medication } from '@/types/medication';

import { Line } from '../Line/Line';
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
  const selected = profileStore((state) => state.selected!);

  const handleEditMedication = () => {
    if (medication) {
      router.push({
        pathname: `/remedios/cadastrar/[profileId]`,
        params: { medicationId: medication.id, profileId: selected.id },
      });
      onClose?.();
    }
  };
  return (
    <Popover
      {...props}
      placement={PopoverPlacement.LEFT}
      onRequestClose={onClose}
      backgroundStyle={{ opacity: 1, backgroundColor: 'transparent' }}
      popoverStyle={{ elevation: 5, borderRadius: 10 }}
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
        <S.ButtonAlert>
          <Text className="self-center" palette="white" weight="semi">
            Remover
          </Text>
        </S.ButtonAlert>
      </View>
    </Popover>
  );
}
