import { View } from 'react-native';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return <View className="flex-1 bg-background-main">{children}</View>;
}
