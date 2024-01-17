const name = "Ayush"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ayush-hc-com')

console.log(gameName[3]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// yah ham logo ko word kitna bda hai uski length dekhna k liya haota hai(isme ham logo ka 0 se start hota hai)


// console.log(gameName.toUpperCase());
//ya letter captial mein likna k liya use hota hai 


console.log(gameName.charAt(2));
// ise ham log pta karte hai kon sa word hai 2 no. pra hai 


console.log(gameName.indexOf('t'));
// ise pta hota hai s letter kon se no par hai 


const newString = gameName.substring(0, 4)
console.log(newString);
// isme ham log pta karte hai 0, 4 k bich mein kon se no. aate hai 


const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
// isme ham logo ko puce se no leta hai 


const newStringOne = "   Ayush    "
console.log(newStringOne);
console.log(newStringOne.trim());
// trim se ham log gap kahatam karte hai


const url = "https://Ayush.com/Ayush%20chandel"

console.log(url.replace('%20', '-'))
// isme ham log %20 ko replace karte hai - se

console.log(url.includes('sundar'))
// ise pata karte hai yaa  word hai isme ya nahi 

console.log(gameName.split('-'));
//ise ham log letter ko alalg kar sakte hai 


const words = gameName.split('');
console.log(words[1]);
// Expected output: "fox"

const chars = gameName.split('');
console.log(chars[9]);
// Expected output: "k"

const strCopy = gameName.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
