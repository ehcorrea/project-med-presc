import { Dimensions } from 'react-native';

const bases = {
  width: 400,
  height: 780,
};

const { width, height } = Dimensions.get('window');

const rwvalue = (size: number) =>
  Math.floor((width / bases.width) * size).toString();
const rhvalue = (size: number) =>
  Math.floor((height / bases.height) * size).toString();
const rfvalue = (size: number, upscale = 0.5) =>
  (size + (Number(rwvalue(size)) - size) * upscale).toString();

export { rwvalue, rhvalue, rfvalue };
