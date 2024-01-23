// object ko declare karne k liya 2 types 

// 1 = Constructer
// 2 = Singleton

// 1= Singleton
// Object.create ase hi create karte hain agar 
//  Interview mein puchte hai tog bol dena ki yaa constructer se hi banta hai singleton

// 2= Object literals

 const mySym = Symbol("key1")

const JsUser = {
    name: "Ayush Chandel",
    "full name": "Ayush Chandel",
      mySym: "mykey1",
      [mySym]: "mykey1",
    // isme jab [ ] lageynge tabhi ham logo ka ya correct aayega 
    // isko ham logf sirf consloe kar sakte hain ["mein"] bs ase hi kar sakte hain 
    age: 18,
    location: "Jaipur",
    email: "Ayushchandel1999@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

 console.log(JsUser.email)
 console.log(JsUser["email"])
 console.log(JsUser["full name"])

 console.log(typeof JsUser.mySym)
 // ise pta karte kon sa string hai 

 console.log(JsUser[mySym])
 // isme jab [ ] laga denge tab show hoga arrays ki tarah

JsUser.email = "Ayushchandel1999@gmail.com"
 Object.freeze(JsUser)
// freeze mein ham log dushri di hui value change nahi kar sakte hai, isliye freeze use karte hai 
 JsUser.email = "Ayushchandel2018@gmail.com"

console.log(JsUser);

 JsUser.greeting = function(){
   console.log("Hello JS user");
}

 JsUser.greetingTwo = function(){
     console.log(`Hello JS user, ${this.name}`);
     //this apply karne par bohat si value aati hai jo kijs user mein di hui hai 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());