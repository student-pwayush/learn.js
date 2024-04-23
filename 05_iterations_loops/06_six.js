// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const nums = mynums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },2)
// console.log(nums);




// const shopingcourse = [
//     {
//         course: "javascript",
//         price: 1200
//     },
//     {
//         course: "python",
//         price: 2500

//     },
//     {
//         course: "css",
//         price: 250

//     },
//     {
//         course: "html",
//         price: 6500

//     },]


//     const course = shopingcourse.reduce((acc, item) => acc + item.price, 0)
//     console.log(course);

const mynumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nums = mynumber.reduce (function(acc, currval) {
    console.log(`acc ${acc} and currval ${currval}`);
    return acc + currval

})
console.log(nums);







const shopingcourse = [
        {
            course: "javascript",
            price: 1200
        },
        {
            course: "python",
            price: 2500
    
        },
        {
            course: "css",
            price: 250
    
        },
        {
            course: "html",
            price: 6500
    
        },]
    
    
        const course = shopingcourse.reduce((acc, currval) => acc+currval.price, 0)
        console.log(course);