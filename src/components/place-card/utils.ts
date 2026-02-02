export const formatType = (type: string): string => {
  const firstLetter = type.charAt(0).toUpperCase();
  const rest = type.slice(1);
  return firstLetter + rest;
};
