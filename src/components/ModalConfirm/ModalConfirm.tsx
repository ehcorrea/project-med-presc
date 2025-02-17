import { View } from 'react-native';

import { Modal } from '../Modal/Modal';
import { Text } from '../Text/Text';
import { Spancing } from '../Spacing/Spacing';

import * as S from './ModalConfirm.styles';

export type ModalConfirmProps = {
  title?: string;
  onConfirm: () => void;
  onClose: () => void;
  open: boolean;
  children: React.ReactElement;
};

export function ModalConfirm({
  title = 'Selecione o intervalo',
  onClose,
  onConfirm,
  children,
  open,
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
          <S.ModalButon palette="transparent" cancel onPress={onClose}>
            Cancelar
          </S.ModalButon>
          <Spancing x={5} />
          <S.ModalButon onPress={handleConfirmar}>Confirmar</S.ModalButon>
        </View>
      </View>
    </Modal>
  );
}
