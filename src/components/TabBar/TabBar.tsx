import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from './Button/Button';

import * as S from './TabBar.styles';

export function TabBar(props: BottomTabBarProps) {
  const { bottom } = useSafeAreaInsets();

  const onPress = ({
    key,
    name,
    params,
  }: {
    key: string;
    name: string;
    params?: object;
  }) => {
    props.navigation.emit({
      type: 'tabPress',
      target: key,
      canPreventDefault: true,
    });
    props.navigation.navigate(name, params);
  };

  return (
    <S.Container bottom={bottom}>
      {props.state.routes.map((route, index) => {
        return (
          <Button
            onPress={() => {
              onPress({
                key: route.key,
                name: route.name,
                params: route.params,
              });
            }}
            key={route.key}
            isFocused={props.state.index === index}
            name={route.name}
          />
        );
      })}
    </S.Container>
  );
}
