import { Dimensions } from 'react-native';

const bases = {
  width: 400,
  height: 780,
};

const { width, height } = Dimensions.get('window');

const rwvalue = (size: number) => Math.floor((width / bases.width) * size);
const rhvalue = (size: number) => Math.floor((height / bases.height) * size);
const rfvalue = (size: number, upscale = 0.5) =>
  size + (rwvalue(size) - size) * upscale;

export { rwvalue, rhvalue, rfvalue };
