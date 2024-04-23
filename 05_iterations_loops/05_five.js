// const mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //const number = mynumber.map( (nums) => nums + 10)
// const number = mynumber.map( (nums) => { return nums + 10})
// // agar open scope se karenge toh return dena hoga isme bhi 
// console.log(number);

// isme ham chaining karenge jo ki chaining ka matlab hota hai bohat sare filter ek saatha operate  karna isko bolete hain chaining

// const mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //const number = mynumber.map( (nums) => nums + 10)
// const number = mynumber
//                     .map( (nums) => nums * 10)
//                     //.map( (nums) => nums + 1)
//                     //.filter( (nums) => nums >= 50)
// console.log(number);


// isko bolte hai chaining jisme ek saath kai filter use karte hain 
const mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nums = mynumber.map ((nums) => nums * 10)
                     .map ((nums) => nums + 1)
                     .filter ((nums) => nums >= 50)
console.log(nums);







