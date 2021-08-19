/*
 * How Bubble-sort works
    1. Loop through an array,
    2. Compares each pair of adjacent elements. 
    3. Keep  comparing one element to the one right next to it,
    4. Swaps them if they are in the wrong order. If the element on the right is smaller, we swap the two positions.
    5. Repeat the process until no swaps are required, implies the list is sorted.
*/

// Optimize Solution
// Optimized implementation of bubble sort Algorithm
function swapElement(arr, firstIndex, secondIndex) {
  var tmp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tmp;
}

function bubbleSort(arr) {
  var len = arr.length,
    i,
    j,
    stop;

  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swapElement(arr, j, j + 1);
      }
    }
  }

  return arr;
}
console.log(bubbleSort([30, 3, 90, 150, 45, 63, 27, 18, 12, 999]));
