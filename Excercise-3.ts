// Q-3 Name Cases: Store a person’s name in a variable, and then print that person’s
// name in lowercase, uppercase, and titlecase

let personName = "Faysal Sharif"


//lowercase

console.log("Lower case:", personName.toLowerCase());

// Uppercase

console.log("Upper case:", personName.toUpperCase());

// title case

let words:string []=personName.split(" ");

let titlecaseName:string = "";

for(let i=0;i<words.length;i++){
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
}
console.log("Title case:", titlecaseName.trim());

export{};
