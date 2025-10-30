export const test = (diceThrower) => {
  return diceThrower.flat().reduce((sum, dice) => sum + dice, 0);
}