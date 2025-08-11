import { FlatList } from 'react-native';

import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { Spancing } from '../Spacing/Spacing';
import { Text } from '../Text/Text';

type ModalOptionsProps<T> = {
  values: {
    title: string;
    value: T;
  }[];
  onSelect: (value: T) => void;
  title?: string;
  onClose: () => void;
  open: boolean;
};

export function ModalOptions<T>({
  values,
  onSelect,
  onClose,
  title,
  open,
}: ModalOptionsProps<T>) {
  return (
    <Modal
      onTouchBackground={onClose}
      open={open}
      className="min-h-[20%] max-h-[65%] p-[5%] px-[8%]"
    >
      <Text weight="semibold" size="large" className="self-center">
        {title}
      </Text>
      <Spancing y="10" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={values}
        renderItem={({ item }) => {
          return (
            <>
              <Button
                className="flex-row rounded-md"
                onPress={() => {
                  onSelect(item.value);
                  onClose();
                }}
                label={{ size: 'large' }}
              >
                {item.title}
              </Button>
              <Spancing y="6" />
            </>
          );
        }}
      />
    </Modal>
  );
}
