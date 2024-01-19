
//most important quuestion in interview 

//Why JavaScript is dynamic not static?

//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value 
//they hold at runtime and can change throughout the program as we assign different values to them...


// Primitive 
// Primitive data  Are (7) types - includes byte , short , int , long , float , double , boolean , undefind and char.


// const bignumber = 2458729345n (Are BigInt because it have large no of digits but jab ham log in digit k aage (n) lagyenge tab ya BigInt banega )


//  References Non-primitive
// Non-primitive data types - such as String , Arrays and Classes (you will learn more about these in a later chapter)



     //  Table-typeof Operator Results

//Type of val                                             Result


//1-Undefined                                               "undefined"

//2-Null                                                     "object"

//3-Boolean                                                  "boolean"

//4-Number                                                   "number"

//5-String                                                    "string"

//6-Object (native and does not implement [[Call]])           "object"

//7-Object (native or host and does implement [[Call]])      "function"

//8-Object (host and does not implement [[Call]])             Implementa8-tion-defined except may not be "undefined", "boolean", "number", or "string"






const hero = [ "Ram", "Laxman", "bharat", "Satrughan"];  
 
// Example of Obejcts
 const myobj = {
     name: "Ayush",
    age: 15,
}
console.log(typeof anotherid);

//const myfunction = function(){
  //  console.log("Hello World");
//}
//const id = (123)

//const anotherid = ("123")


//console.log(id === anotherid); 

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                    //   memoryies



  //                  memoryies are two types 
//1=  Stack ( primitive values in this memory )  stack mein ham logo ko copy value milti hai   
//2= heap ( non- primitive values in this memory)  heap mein new value ka refrence  milta hai

//Example of stack 

let myname = "Ayush Chandel"
let anothername = myname
anothername = "Satyam" 
 console.log(myname);
 console.log(anothername);

//NOTE

 //isme ham log pahle jab console.log mein jab anothername diye 
 //the tab ham logo ki pahle vali jo ki name thi vo value lee raha tha 
 //but jab ham logo ne another ki value change kar di tab dushri ho gai ua ham logo ka stack ka example hai
 // pahle console mein ham logo ne jab value myname rakhi tab bhi yahi thi
 // dushre console mein haj value another rakhi tab ham logo ki value change hui 


 //Example of Heap:-

let uesrOne = {
  email : "ayushchangfekkl522",
  age : "hwgns"
}

let userTwo = uesrOne
userTwo.email = "satysymhdhsh255",

console.log(uesrOne);
console.log(userTwo);

//Node
//email : "ayushchangfekkl522" ki pahle value ya lin ythi but next---- userTwo mein ham logo ne userTwo.email = "satysymhdhsh255", ya li hai isliya ham logo ki valye dodno mein change ho gayi 
// isko bolte hai heap always refrence ki value leta hai 
Example
let uesrFour = {
  email: "ayushgtdhsvv2848",
  name : "aaaaaaAyush"
} 

let userFive = uesrFour
email: "ajudsegged275"

console.log(uesrFour);
console.log(userFive);