// // ya switch ka statment hota hai jisme ham log check bohat si value aur kon si value correct hogi yahi value ham logo ki sahi executed hoti hai 

// // switch (key) {
// //     case value:
        
// //         break;

// //     default:
// //         break;
// // }

// //  ********************************************  Ab ham logo work karenge isme ************************************

// const months = 4
// switch (months) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("Fabuary");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//         //    NOTE =  agar yahi par break kar deta hai toh ham logo ki sari niche ki value accepcted default hoti hai hardam yaa imp. ham interview k liye 

//     default: 
//     console.log("the value should be wrong");
//         break;
// }

// // *********** ab gara ham logo ka string mein pucha ho toh kya karenge,  same as jaise ham logo if else mein karte the waise hi isme karenge  

// const month = "March"

// switch (month) {
//     case "January":
//         console.log("January");
//         break;
//     case "Fabuary":
//         console.log("Fabuary");
//         break;
//     case "March":
//         console.log("March");
//         break;
//     case "April":
//         console.log("April");
//         break;
//     case "May":
//         console.log("May");
//         break;
//     case "June":
//         console.log("June");
//         break;
//         //    NOTE =  agar yahi par break kar deta hai toh ham logo ki sari niche ki value accepcted default hoti hai hardam yaa imp. haii interview k liye 

//     default: 
//     console.log("the value should be wrong");
//         break;
// }

// //  ---------------------  Examples -------------------------------------------

const months = "january";
switch (months) {
    case "january": 
        console.log("1");
        break;
    case "febuary": 
        console.log("2");
        break;
    case "march": 
        console.log("3");
        break;
    case "june": 
        console.log("4");
        break;
    case "july": 
        console.log("5");
        break;

    default:
        console.log("default case match");
        break;
}


const cars = "alto"
switch (cars) {
    case "bolero":
        console.log(1);
        break;
    case "swift":
        console.log(2);
        break;
    case "fortuner":
        console.log(3);
        break;
    case "alto":
        console.log(4);
        break;
    case "scorpio":
        console.log(5);
        break;

    default:
        console.log("default case not matched");
        break;
}