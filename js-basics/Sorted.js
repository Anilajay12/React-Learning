const nums = [9, 81, 4, 6, 3];

// To maintain mutability used slice operator

const sorted = nums.slice().sort((a, b) => a - b);
sorted;

const sort2 = nums.slice().sort((a, b) => b - a);
sort2;

nums;

// Add new book
const numsAfterAdd = [...nums, 8];
numsAfterAdd;

const numsAfterDelete = numsAfterAdd.filter((num) => num !== 8);
numsAfterDelete;
