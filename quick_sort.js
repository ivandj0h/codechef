/*
 * Understanding the Logic Behind Quicksort
 * Let's take a look at how Quicksort works:

 * Select an element of the array. This element is generally called the pivot. Most often this element is either the first or the last element in the array.
 * Then, rearrange the elements of the array so that all the elements to the left of the pivot are smaller than the pivot and all the elements to the right are greater than the pivot. The step is called partitioning. If an element is equal to the pivot, it doesn't matter on which side it goes.
 * Repeat this process individually for the left and right side of the pivot, until the array is sorted.
 * 
 */

function partition(arr, start, end) {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function quickSortRecursive(arr, start, end) {
  // Base case or terminating case
  if (start >= end) {
    return;
  }

  // Returns pivotIndex
  let index = partition(arr, start, end);

  // Recursively apply the same logic to the left and right subarrays
  quickSortRecursive(arr, start, index - 1);
  quickSortRecursive(arr, index + 1, end);
}

// Run The Program
const array = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSortRecursive(array, 0, array.length - 1);

console.log(array);
