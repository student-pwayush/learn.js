
// // const user = {
// //     username: "Ayush",
// //     price: 1545,
          
// //             welcomeMessage: function () {
// //                 console.log(`${this.username}, welcome my website`);
// //                 // **********************  { This. } ham logo ka current context ko refers karta hai 
// //                  console.log(user);
// //                 console.log(this);
// //             }
// // }
// //    user.welcomeMessage()
// //   user.username = "Satyam"
// //   user.welcomeMessage();
// //  console.log(this);

// // Browser k ander jo Global object hai vo Window object jaise clicko aur bhi hai  { IMP }********************
// // yahi value ham logo ki empety show hoti hai vs - code k ander {-jo ki yaa hoti hai-}


// // function chai () {    
// //   console.log(this);  
// // } 
// // chai()

// // ******************Arrow functions are made by the help of [ is tarah se aarow function banta hai => "() => {}"  ]
// // ***********************************implecent return mein {-yaa parathessis use nahi karte hai-}****************



// impratant----***--****************************************************************************************

//    (1)   Arrows Operations

// const chai = ( ) => { 
//     let username =  "Ayush"
//     console.log(username);
    
// }
// chai()
/// the answer should be === Ayush 

/// ( 2 ) function operations 

// let chai = function chai() {
//     let username = "Ayush"
//      console.log(this.username);
// }
// chai()
/// this should be aa big diffrenece in this and aarows... the answr should be comesout ==== undefind....


// //*** ( 1) - Basic Arrow => Function Example  */ 
// // const addtwo = (num1, num2) => {
// //     return num1 + num2
// //  }

// // console.log (addtwo(3, 4));


// //*** ( 2 )- EMPLICTE Return  Arrow function Example *******/

// //const addtwo = (num1, num2) =>  num1 + num2
 
// //***ise bhi Simple hai ek aur PARATHESSIS USE KAar lijiye*/
// //const addtwo = (num1, num2) =>  (num1 + num2)

// // yahi jab OBJECT return karenge mein use karemnge tab ham log tab bhi PARARTHESSIS use hi karenge (),
//  const addtwo = (num1, num2) =>  ({username: "Ayush"})

//  console.log (addtwo()); 
// //*** isme yaa khud hi  assume kar leta hai ki return karna hain */
    

//// -----------------------------------------------EXAMPLES---------------------------------------

// const user = {
//     username: "Ayush",
//     place: 'kanpur',
//     price: 1222,

//     welcomeMessage: function () {
//         console.log(`my name is ${this.username}, my city is ${this.place}, my rent is affordable ${this.price}`);
//         //console.log(this);
//     }

// }
// user.welcomeMessage()
// user.username  =  "SAtyam",

// user.place = 'satna',
// user.price = 25485,
// user.welcomeMessage()

// //console.log(this);















// let user = {
//     myname: "Ayush",
//     Class: 12485,
//     id: 24512,
//     password: "Ayush245585",

//     mymessage: function ( ) {
//         console.log(`myjnbfcbcbbvyeefy ${this.myname}dbebfyefygey${this.Class}bdbhfbhbfvj${this.id}bbwbibfi3bi${this.password}`);
//     }
// }
// user.mymessage ()



const chai = ( ) => ({username : "Ayush"})
console.log(chai());
