import { useState } from 'react';
import DatePicker from 'react-native-date-picker';

import { dateValuesString } from '@/utils';

import { ModalConfirm, ModalConfirmProps } from '../ModalConfirm/ModalConfirm';

export type ModalTimerProps = {
  onConfirm: (hr: string, min: string) => void;
} & Omit<ModalConfirmProps, 'onConfirm' | 'children'>;

export function ModalTimer({ onConfirm, ...props }: ModalTimerProps) {
  const [newData, setNewDate] = useState(
    new Date(new Date().setHours(0, 30, 0, 0))
  );

  const handleConfirm = () => {
    const { hour, min } = dateValuesString(newData);
    onConfirm(hour, min);
  };

  return (
    <ModalConfirm onConfirm={handleConfirm} {...props}>
      <DatePicker
        theme="light"
        cancelText="Cancelar"
        confirmText="Confirmar"
        date={newData}
        is24hourSource="locale"
        locale="pt-BR"
        minuteInterval={30}
        mode="time"
        onDateChange={(value) => setNewDate(value)}
      />
    </ModalConfirm>
  );
}
