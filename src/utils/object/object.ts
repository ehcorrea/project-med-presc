export const getValuesFromEnum = <T extends string>(
  enumObj: Record<T, string>,
  value: T
) => {
  return enumObj[value];
};
