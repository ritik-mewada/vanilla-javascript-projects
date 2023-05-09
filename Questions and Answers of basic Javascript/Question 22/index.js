// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// sort
const sortedAges = ages.sort(); // [ 19, 19, 20, 22, 24, 24, 24, 25, 25, 26 ]

// min
const minAge = Math.min(...ages); // 19
// max
const maxAge = Math.max(...ages); // 26

// median
const midValue = Math.floor(ages.length / 2);
const median = (sortedAges[midValue] + sortedAges[midValue - 1]) / 2; // 24

// average
const total = ages.reduce((a, b) => a + b);
const average = total / ages.length; // 22.8

// range of the ages(max minus min)
const range = maxAge - minAge; // 7

//     - Compare the value of (min - average) and (max - average), use abs() method
const compareWithMinAge = Math.abs(minAge - average); // 209
const compareWithMaxAge = Math.abs(maxAge - average); // 202
