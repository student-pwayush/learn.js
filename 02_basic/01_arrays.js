// Array
//The Array object, as with arrays in other programming languages (DATA TYPES)
//enables storing a collection of multiple items under a single variable name
// and we can added the more on obejct, boolean, Numbers...


// JavaScript array-copy operations are a 2 types Copies. 
//   (1)-Shallow copies  == ism ham logo ko vahi value milti hai jo ki ham logo ne value rakhi hoti hai  vahi value aati hai refrence ki. 
//   (2)-Deep copies == isme ham logo ko new value milti hai , pahle vali value nahi aati hai refrence ki .

// const myarr = [0, 1, 2, 3]
// const myheros = ["Shaktiman, salmankhan"]
// is types se bhi write kar sakte hai 

// const myarr2 = new Array(1, 2, 3)
// / ya number tyes sa write kar sakte hai 

// console.log(myarr[2]);
// isme di gayi ek baar mein ek hi value aayegi jise ki {1}


// ********************* ARRAY METHODS ***************

//const myarr = [0, 1, 2, 3, 4, 5]

// myarr.push(8)
// myarr.push(9)
// isko ham log add kar sakte hain number

// myarr.pop()
// ise ham log add kiya hua numbers show nahi hoga (9)

//myarr.unshift(7)
// isme ham log number add karte hain aage 

//myarr.shift()
//ham log add kiya hua no remove kar sakte hain 

//console.log(myarr.includes(5));
//isme ham log check karte hain yaa digit hai ya nahi jo ki show hoga output [ FALSE / TURE ]

//console.log(myarr.indexOf(16));
//jo ki show hoga output -1

//const newarr = myarr.join()

//console.log(myarr);

//console.log(typeof newarr);
// ise ham log pta karte hain hai kon sa variable hain

//*****************Slice and Splice *******/
const myarr = [0, 1, 2, 3, 4, 5]

const myn = myarr
console.log(myn);
console.log("A", myn);
// isme ham logo ko same mila ga  

const myn1 = myarr.splice(1, 3)
console.log(myn1);
console.log("B", myn1); 
// isme ham logo ko 1, 2, 3, 4 mila 


const myn2 = myarr.splice(1, 3)
console.log(myn2);
console.log("C", myn2); 
// isme ham logo ko 4, 5 mila only 


// isme ham logo ki 1---3 tak ki value ko nahin show karega kyun splice hai yaa baki ki bachi value show karega isme 
