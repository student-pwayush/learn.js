//    ***************  Iterations ko loop bhi bolte hain..  ********************************* 
//    ***************  for loop how we can use it....  ***************

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }

// // ******************************************  Short Form  for loop works ***********************************************
// // for (let i = 0; i <= 20; i++) {
// //     const element = i;
// //     console.log(element);
// // }


// // for (let i = 0; i<= 10; i++) {
// //     const element = i;
// //     console.log(`outer value : ${i} `);
// //     for (let j = 0; j <= 10; j++) {
// //         const element = j;
// //         console.log(j + '*' + j + ' =' + i*j );
// //     }    
// // } 


// // for (let i = 0; i <= 20; i++) {
// //     const element = i;
// //     console.log(`outer value ${i}`);
// //     for (let j = 0; j <= 20; j++) {
// //         const element = j;
// //         console.log(i + '*' + j + '=' + i*j );
// //     }
// // }


// // for (let i = 0; i < 10; i++) {
// //     const element = i;
// //     console.log((`outer${i}`));
// //     for (let j = 0; j < 10; j++) {
// //         const element = j;
// //         console.log(i + '*' + j + '=' + i*j);
// //     }
// // }


// iski help se badi si badi value ko calculate kar sakte hain easily 
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(`outer values ${i}`);
//     for (let j = 0; j <= 20; j++) {
//         const element = j;
//         console.log(i + '/' + j + '=' + i+j);
        
//     }
    
// }



// let myarray = ["batsman", "superman", "spiderman"];
// console.log(myarray.length);
// for (let i = 0; i <= myarray.length; i++) {
//     const element = myarray[i];
//     console.log(element);
    
// }

// //******************** Break & continue ****************************************************

// for (let i = 2; i <= 10; i++) {
//     if (i == 5) {
//         console.log(' 5 is detected');
//         break
//     }
//     console.log(i);    
// }

// // ***************************************** EXAMPLE ********************
// for (let i = 0; i <=10; i++) {
//     const element = (` outer valurs are there ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         const element = j;
//         console.log(i + ' +' , j + '=' + i+j);
//     }
// }


// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if (i == 7) {
//         console.log("7 is detected");
//     }
//     console.log(element);
// }



// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }


// for (let i = 0; i <= 40; i++) {
//     console.log(`outer value : ${i}`);
//     for (let j = 0; j <= 20; j++) {
//         console.log(`inner value: ${j} and outer value is: ${i}`);
//     }
// }


// let myarray = [ "badman", "courtman", "spiderman", "Ayush"]
// let myarray = [2455, 575, 2584, 544]
// console.log(myarray.length);
// for (let i = 0; i < myarray; i++) {
//     const element = array[i];
//     console.log(element);
// }

// for (let i = 0; i <= 40; i++) {
//     console.log(`outer value : ${i}`);
//     for (let j = 0; j <= 20; j++) {
//         console.log(i + '/' + j + '=' + i*j);
//     }
// }




for (let j = 0; j <= 10; j++) {
    if (j == 7) {
        console.log('If 7 is detected stop it ');
    }
    console.log(j);
}