import { View } from 'react-native';

import { Color, Palette } from '@/types/theme';

import { Modal } from '../Modal/Modal';
import { Spancing } from '../Spacing/Spacing';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

export type ModalConfirmProps = {
  children: React.ReactElement;
  onClose: () => void;
  onConfirm: () => void;
  open: boolean;
  title?: string;
  confirmColor?: {
    palette?: Palette;
    color?: Color;
  };
};

export function ModalConfirm({
  children,
  onClose,
  onConfirm,
  open,
  title = 'Selecione o intervalo',
  confirmColor = {
    palette: 'primary',
    color: 'main',
  },
}: ModalConfirmProps) {
  const handleConfirmar = () => {
    onClose();
    onConfirm();
  };

  return (
    <Modal variant="floating" open={open} onTouchBackground={onClose}>
      <View className="p-[5%] flex-1 items-center justify-between">
        <Text weight="bold" size="xlarge" className="self-center ">
          {title}
        </Text>
        {children}
        <View className="flex-row max-w-[60%] self-end">
          <Button
            className="flex-1 h-[50px]"
            label={{ palette: 'black', size: 'medium' }}
            onPress={onClose}
            palette="transparent"
          >
            Cancelar
          </Button>
          <Spancing x="5" />
          <Button
            className="flex-1 h-[50px]"
            color={50}
            label={{ palette: 'white', size: 'medium' }}
            onPress={handleConfirmar}
            {...confirmColor}
          >
            Confirmar
          </Button>
        </View>
      </View>
    </Modal>
  );
}
