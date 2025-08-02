//Q.2561 HARD
// You have two fruit baskets containing n fruits each. You are given two 0-indexed integer arrays basket1 and basket2 representing the cost of fruit in each basket. You want to make both baskets equal. To do so, you can use the following operation as many times as you want:

// Chose two indices i and j, and swap the ith fruit of basket1 with the jth fruit of basket2.
// The cost of the swap is min(basket1[i],basket2[j]).
// Two baskets are considered equal if sorting them according to the fruit cost makes them exactly the same baskets.

// Return the minimum cost to make both the baskets equal or -1 if impossible.

/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function (basket1, basket2) {
  const fruitsToSwap = new Map();
  let minFruitCost = Infinity;

  for (const fruit of basket1) {
    fruitsToSwap.set(fruit, (fruitsToSwap.get(fruit) ?? 0) + 1);
    minFruitCost = Math.min(minFruitCost, fruit);
  }

  // to determine list of surplus/deficit(-ve value) fruits in both baskets - the ones that need to swapped
  for (const fruit of basket2) {
    //if equal cost is present in basket2 then value set becomes 0
    fruitsToSwap.set(fruit, (fruitsToSwap.get(fruit) ?? 0) - 1);
    minFruitCost = Math.min(minFruitCost, fruit);
  }

  //array of fruits' cost to swap
  let swapList = [];

  for (const [cost, costCount] of fruitsToSwap.entries()) {
    //check if the surplus or deficit count is even proceed else cannot be equally distributed and hence return -1
    if (costCount % 2 !== 0) {
      return -1;
    }
    // create swap list by push k as many times swap is required
    // now, number of swap required is count/2
    // also use abs(count)/2 since deficit count is in negative.
    for (let i = 0; i < Math.abs(costCount) / 2; i++) {
      swapList.push(cost);
    }
  }
  // sort the swap list
  swapList.sort((a, b) => a - b);

  // half of this list is to be swapped with the other half
  let totalCost = 0;
  for (let i = 0; i < swapList.length / 2; i++) {
    // 2 * minFruitCost if indirect swap or else minimum cost that is getting swapped
    totalCost += Math.min(swapList[i], 2 * minFruitCost);
  }

  return totalCost;
};
