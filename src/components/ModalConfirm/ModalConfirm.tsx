import { View } from 'react-native';

import { Modal } from '../Modal/Modal';
import { Spancing } from '../Spacing/Spacing';
import { Text } from '../Text/Text';

import * as S from './ModalConfirm.styles';

export type ModalConfirmProps = {
  alert?: boolean;
  children: React.ReactElement;
  onClose: () => void;
  onConfirm: () => void;
  open: boolean;
  title?: string;
};

export function ModalConfirm({
  alert,
  children,
  onClose,
  onConfirm,
  open,
  title = 'Selecione o intervalo',
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
          <S.ModalButon onPress={handleConfirmar} alert={alert}>
            Confirmar
          </S.ModalButon>
        </View>
      </View>
    </Modal>
  );
}
