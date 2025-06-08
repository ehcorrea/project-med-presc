import { forwardRef, useEffect, useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons/';
import { useTheme } from '@emotion/react';
import {
  Pressable,
  TextInput as TextInputRN,
  TextInputProps as TextInputRNProps,
  TouchableOpacity,
  ViewProps,
} from 'react-native';

import { Spancing } from '../Spacing/Spacing';
import { Text, TextProps } from '../Text/Text';

import * as S from './Input.styles';

export type TextInputProps = {
  containerProps?: ViewProps;
  error?: string;
  forceHasFocus?: boolean;
  label: string;
  labelProps?: TextProps;
  onFocus?: () => void;
  size?: S.ContainerProps['size'];
  variant?: 'default' | 'password';
} & TextInputRNProps;

type GetInputStateParams = {
  hasError: boolean;
  hasFocus: boolean;
};

const getInputState = ({
  hasError,
  hasFocus,
}: GetInputStateParams): S.ContainerProps['state'] => {
  if (hasError) {
    return 'error';
  }
  if (hasFocus) {
    return 'focused';
  }
  return 'default';
};

export const Input = forwardRef<TextInputRN, TextInputProps>(
  (
    {
      containerProps,
      defaultValue,
      error,
      label,
      labelProps,
      variant = 'default',
      size = 'medium',
      onFocus,
      forceHasFocus = false,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<TextInputRN>(null);
    const theme = useTheme();
    const [hasFocus, setHasFocus] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(
      variant === 'password'
    );

    const handlePressContainer = () => {
      onFocus?.();
      inputRef.current?.focus();
    };

    const handleSecureText = () => {
      setSecureTextEntry((prevState) => !prevState);
    };

    useEffect(() => {
      setHasFocus(forceHasFocus);
    }, [forceHasFocus]);

    return (
      <Pressable onPress={handlePressContainer} className="w-full">
        <Text
          size="large"
          palette={hasFocus ? 'primary' : 'gray'}
          {...labelProps}
        >
          {label}
        </Text>
        <Spancing y="2" />
        <S.Container
          size={size}
          state={getInputState({ hasError: !!error, hasFocus })}
          {...containerProps}
        >
          <S.Input
            {...props}
            textAlignVertical="center"
            ref={ref || inputRef}
            size={size}
            secureTextEntry={secureTextEntry}
            onFocus={() => {
              setHasFocus(true);
            }}
            onBlur={(e) => {
              setHasFocus(false);
              props.onBlur?.(e);
            }}
          />
          {variant === 'password' && (
            <TouchableOpacity
              onPress={handleSecureText}
              accessibilityLabel={
                secureTextEntry ? 'mostrar senha' : 'esconder senha'
              }
            >
              <Ionicons
                color={theme.colors.gray[50]}
                name={secureTextEntry ? 'eye-off' : 'eye'}
                size={Number(theme.rfvalue(25))}
              />
            </TouchableOpacity>
          )}
        </S.Container>
        <Spancing y="2" />
        <Text palette="error">{error}</Text>
      </Pressable>
    );
  }
);
