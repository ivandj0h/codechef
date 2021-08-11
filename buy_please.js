/*
 * Chef went to a shop and buys a pens and b pencils.
 * Each pen costs x units and each pencil costs y units.
 * Now find what is the total amount Chef will spend to buy a pens and b pencils.
 *
 * In the first example, total cost is (2 * 4 + 4 * 5) = 28.
 * In the second example, total cost is (1 * 1 + 4 * 8) = 12.
 *
 */
function buyMe(a, b, x, y) {
  const firstResult = a * x;
  const secondResult = b * y;
  return firstResult + secondResult;
}

console.log(buyMe(1, 1, 4, 8));
