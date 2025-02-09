import { FlatList } from 'react-native';

import { Button } from '../Button/Button';
import { Modal, ModalProps } from '../Modal/Modal';
import { Spancing } from '../Spacing/Spacing';
import { Text } from '../Text/Text';

type ModalOptionsProps<T> = {
  values: {
    title: string;
    value: T;
  }[];
  onSelect: (value: T) => void;
  title?: string;
} & Omit<ModalProps, 'children'>;

export function ModalOptions<T>({
  values,
  onSelect,
  title,
  ...props
}: ModalOptionsProps<T>) {
  return (
    <Modal className="min-h-[20%] max-h-[65%] p-[5%] px-[8%]" {...props}>
      <Text weight="semi" size="large" className="self-center">
        {title}
      </Text>
      <Spancing y={10} />
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
                }}
                label={{ size: 'large' }}
              >
                {item.title}
              </Button>
              <Spancing y={6} />
            </>
          );
        }}
      />
    </Modal>
  );
}
