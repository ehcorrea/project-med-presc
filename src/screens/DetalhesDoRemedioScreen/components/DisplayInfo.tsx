import { View } from 'react-native';

type DisplayInfoProps = {
  children: React.ReactNode;
};

export const DisplayInfo = ({ children }: DisplayInfoProps) => {
  return (
    <View className="p-2.5 border border-gray-300 rounded justify-center min-h-[50px]">
      {children}
    </View>
  );
};
