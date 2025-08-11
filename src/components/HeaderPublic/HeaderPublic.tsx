import { ImageBackground } from 'expo-image';

export type HeaderPublicProps = {
  children?: React.ReactElement;
};

export function HeaderPublic({ children }: HeaderPublicProps) {
  return (
    <ImageBackground
      contentFit="cover"
      source={require('@/assets/images/elipses.svg')}
      className="items-start h-[85px] justify-end px-[5%] py-[2%] w-full"
    >
      {children}
    </ImageBackground>
  );
}
