// // 1 = Constructer

// //const tinder = new Object ()
// // dono ka same ouput hai but ya singleton object =====IMP
// //const tinder = {}
// //  non singhleton object 
// //console.log(tinder);
// // dono ka same output aayega isme   {} yahi parathessis aayega hi

// const tinderUser = {}
//   tinderUser.id = "123Ayush"
//   tinderUser.surname = "Chandel"
//   tinderUser.isLoggedIn = true 

// //console.log(tinderUser);

// //const tinderUser = {
// //     email: "Ayushchandel2018@gmail.com",
// //     name: {
// //         fullname: {
// //             firstname: "Ayush",
// //             lastname: "chandel"

// //         }
// //     } 
// // }

// // console.log(tinderUser.name.fullname.firstname);


// const obj1 = {1:"A", 2:"B"}
// const obj2 = {3:"C", 4:"D"}

// //const obj3 = { obj1, obj2 }
// //isme karne par ase aata hai hai = { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }

// //const obj3 = Object.assign({}, obj1, obj2)
// // assign se sab saath aa jayenge isliye yaa use karte hai 
// const obj3 = {  ...obj1, ...obj2 } 
// // ise sbhi sab ek saathe aa jayenge 
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// // isko lene sa ham log arrays mein convert kar diye hai aur han ab ham logo aage isko bohat si jagah par use kar sakte hai 

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// // siko har ek array ko key arrays lane k liya use karte hai 

// console.log(tinderUser.hasOwnProperty('id'));
// // ise pta karte hai property hai ya nahi 

const course = {
  // ya ham logo ka object hai 
       coursename: "B. tech ME",
       Price: "1254254",
       City: "KAnpur",
       courseInstructor: "Ayush"
}
//course.courseInstructor
const {City: ayush25} = course
// courseInstructor:ki jagah ham logo ne ayush25 likha aur value hamne di hai console.log mein ayush25
// isko hi bolte value ko destructure karna  
console.log(ayush25);

// ism eham logo ki kuch error aayegi  aur han ham logo ne {} k bahar koi bhi const nahgi diy hai jo ki ham logon ka JSON ki tarah treat karte hai isliye 
// json  mein ahm logo ka key bhi string hota hai jise niche example hai 
{
  "coursename": "B. tech ME",
       "Price": "1254254",
       "City": "KAnpur",
       "courseInstructor": "Ayush"
}