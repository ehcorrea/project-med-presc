import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

export type HeaderScreenProps = {
  rightArtifact?: React.ReactElement;
  title?: string;
};

export function HeaderScreen({ title = '', rightArtifact }: HeaderScreenProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="items-start justify-end px-[5%] py-[2%] w-full"
      style={{ marginTop: insets.top }}
    >
      <View className="flex-row justify-between w-full">
        <Button.Back /> {rightArtifact}
      </View>
      {!!title && (
        <Text.Title size="huge" className="mt-[5%] self-center">
          {title}
        </Text.Title>
      )}
    </View>
  );
}
