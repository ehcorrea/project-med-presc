import * as S from './Layout.styles';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return <S.Container>{children}</S.Container>;
}
