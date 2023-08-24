const insertionSort = require('./sort/insertionSort');

var l = [9,8,7,6,5,4,3,2,1,0]

my_sorter = new insertionSort(l);

my_sorter.sort()

console.log(my_sorter.list);

console.log('Hello World')