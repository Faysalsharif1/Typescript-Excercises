
   /* Q: 16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your
program informing people that you found a bigger dinner table.
 
*/

let guestname =  ["Ali","Jahanzaib","Muhammad ALi Jinnah","Zia Khan","Afzaal"];

guestname.forEach((guestname)=> {
    console.log(`Dear ${guestname}, you are invited to dinner plz join, we have found a bigger table`)
}
)
// Add one new guest to the beginning of your array.

let newguest : string = "Amir"

console.log("Adding New Guest in the begining:", guestname.unshift(newguest));
console.log(guestname);



// • Add one new guest to the middle of your array. 

let guestinmiddle:string = "Haroon"
console.log(guestname.length);


let indexofmiddleguest = ((Math.floor(guestname.length/2)))

guestname.splice(indexofmiddleguest,0,guestinmiddle);
console.log(guestname);

// • Use append() to add one new guest to the end of your list. 

let guestatend = "Zahid";

guestname.push(guestatend);
console.log(guestname);
/* • Print a new set of invitation messages, one for each person in
your list*/

guestname.forEach((guestname)=> { console.log(`Dear ${guestname}, you are invited to dinner plz join`)
}
)

export{};