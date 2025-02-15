import Popover, { PopoverPlacement } from 'react-native-popover-view';

import { Line, Spancing, Text } from '@/components';

import { PressOptionsArgs } from '../CardMedicationDetailed/CardMedicationDetailed';

import * as S from './PopoverOptions.styles';
import { View } from 'react-native';

type PopoverOptionsProps = Partial<PressOptionsArgs> & {
  onClose: () => void;
};

export function PopoverOptions({
  medication,
  buttonRef,
  onClose,
}: PopoverOptionsProps) {
  return (
    <Popover
      from={buttonRef}
      isVisible={!!buttonRef}
      placement={PopoverPlacement.LEFT}
      onRequestClose={onClose}
      backgroundStyle={{ opacity: 1, backgroundColor: 'transparent' }}
      popoverStyle={{ elevation: 5, borderRadius: 10 }}
    >
      <S.Button>
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
