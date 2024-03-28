const myArraySort = require('array_sorting_package');

const unsortedArray = [5, 2, 65, 123, 52, 12, 0, 31, 3];
console.log('Unsorted Array:', unsortedArray);

const sortedArrayBubble = myArraySort.bubbleSort(unsortedArray.slice());
console.log('Bubble Sort Result:', sortedArrayBubble);

const sortedArraySelection = myArraySort.selectionSort(unsortedArray.slice());
console.log('Selection Sort Result:', sortedArraySelection);

const sortedArrayInsertion = myArraySort.insertionSort(unsortedArray.slice());
console.log('Insertion Sort Result:', sortedArrayInsertion);

const sortedArrayMerge = myArraySort.mergeSort(unsortedArray.slice());
console.log('Merge Sort Result:', sortedArrayMerge);

const sortedArrayQuick = myArraySort.quickSort(unsortedArray.slice());
console.log('Quick Sort Result:', sortedArrayQuick);
