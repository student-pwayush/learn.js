// // NOTE = FALSEY VALUES = FALSE, 0, -0, BIGINT 0n, "", NULL, UNDEFINED, NAN ALL VALUES ARE FALSE ALWAYS ..

// // NOTE = TRUETHY VALUES = "0", 'FALSE', "--SPACE DIYA HAI--", [], {}, FUNCTIONS(){} 




// const useremail = "ayushchandel1999@gmail.com"
// // isme ham logo simple sa check karenga ki "string value hai ya nahi" agar hai toh fir matlb ya true hai aur agar nhai hai to matlab wrong hai false 

// if (useremail) {
//     console.log("valid to login");
// } else{
//     console.log("Not valid to login");
// }

// //****************************************************************  EXAMPLE FOR TRUTH VALUES  ************************************************************************************************
// const email = []
// // isme ham logo ne array liya hua hai toh ya --truth-- value hai matlb ya true hai aur agar nahai hai to matlab wrong hai false 

// if (email) {
//     console.log("valid to login");
// } else{
//     console.log("Not valid to login");
// }
// // it example of ARRAY [value is empty aur not on array]
// const myemail = []
// if (myemail.length === 0) {
//     console.log("the array check it is empty aur value");
    
// }

// // it example of OBJECT {value is empty aur not on object}
// const emptyobj = {}
// if (Object.keys(emptyobj).length === 0) {
//     console.log("the array check it is empty aur value");
    
// }

// // Nullish coalescing Operator (??) : yaa sirf NULL AUR UNDEFINED k liye use hota hai 

// let val1;

// //val1 = 10 ?? 15
// val1 = null ?? 15
// val1 = undefined ?? 15
// val1 = 15 ?? undefined
// val1 = null ?? 15 ?? undefined
// val1 = null ?? null ?? 20
// val1 = null ?? 35 ?? 25

// console.log(val1);

// //******************************* TERINARY OPERATOR ********************

// // condition ? true aur false 

// const laptopprice = 9000

// laptopprice <= 8000 ? console.log("less than 5000") : console.log("more than 5000"); 




 //                  *******   both are same example of fill array and null array  ********************************* 
// const usergmailcom = []
// if (usergmailcom.length === 0 ) {
//     console.log("arrays is empty");
// }else{
//     console.log("array is fill");

// }
// const usergmailcom = [256556]
// if (usergmailcom.length === 0 ) {
//     console.log("arrays is empty");
// }else{
//     console.log("array is fill");
// }


 //                  *******    The Examples of Objects ********************************* 

 const usergmailcom = {}
if (Object.keys(usergmailcom).length === 0 ) {
    console.log("objects is empty");
}



const tea = 56
tea > 100 ? console.log("tea is ready to drink") : console.log("tea is not ready to drink");