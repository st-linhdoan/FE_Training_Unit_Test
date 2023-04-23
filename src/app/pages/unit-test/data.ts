export const isArrIncrease = (arr: number[]) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    return false;
  }
  return arr.every((num: number, index: number) =>
    !isNaN(num) && (index === 0 || num >= arr[index - 1])
  );
};
