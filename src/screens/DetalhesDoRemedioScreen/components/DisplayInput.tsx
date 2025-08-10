import { Input, TextInputProps } from '@/components';

export const DisplayInput = (props: TextInputProps) => (
  <Input
    containerProps={{ style: { height: 90 } }}
    editable={false}
    labelProps={{ size: 'large' }}
    multiline={true}
    numberOfLines={4}
    textAlignVertical="top"
    {...props}
  />
);
