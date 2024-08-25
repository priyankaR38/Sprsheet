
export const toZeroBased = (oneBased: number): number => oneBased - 1;

export const fromZeroBased = (zeroBased: number): number => zeroBased + 1;

export const colIndexToLetter = (index: number): string => {
  let letter = '';
  while (index >= 0) {
    letter = String.fromCharCode((index % 26) + 65) + letter;
    index = Math.floor(index / 26) - 1;
  }
  return letter;
};

export const letterToColIndex = (letter: string): number => {
  let index = 0;
  for (let i = 0; i < letter.length; i++) {
    index = index * 26 + letter.charCodeAt(i) - 'A'.charCodeAt(0);
  }
  return index;
};
