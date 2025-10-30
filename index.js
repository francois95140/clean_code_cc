export const yamsScore = (diceThrower) => {
  const counts = {};
  diceThrower.flat().forEach(d => counts[d] = (counts[d] || 0) + 1);
  const hasThreeOfAKind = Object.values(counts).some(c => c >= 3);
  if (hasThreeOfAKind) {
    return 28
  }else{
    return diceThrower.flat().reduce((sum, dice) => sum + dice, 0);
  }
} 