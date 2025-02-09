import { rhvalue, rwvalue, rfvalue } from './responsive';

describe('when calls rwvalue, rhvalue and rfvalue', () => {
  test('with screen dimension 750x1334', () => {
    const dimensions = {
      width: rwvalue(10),
      height: rhvalue(20),
      font: rfvalue(13),
    };

    expect(dimensions.width).toBe(18);
    expect(dimensions.height).toBe(34);
    expect(dimensions.font).toBe(18.5);
  });
});
