/*Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite*/

//suppose Mr. Afzaal is not able to come and instead , new invitatio includes Mr. Ahmad

// Step : 1 - Start with your program from Exercise 14. Add a print statement at the end of your
// program stating the name of the guest who can’t make it.


let guestname = ["Ali","Jahanzaib","Muhammad ALi Jinnah","Zia Khan","Afzaal"];

let guestnotcoming:string = "Afzaal" 

console.log(`${guestnotcoming}, can't make it to dinner`)
let indexofguest = guestname.indexOf(guestnotcoming)
console.log(indexofguest);

// Setp: 2  Modify your list, replacing the name of the guest who can’t make it with the name of
//the new person you are inviting
let newguest:string = "Arsalan"
guestname.pop()
guestname.push("Arsalan")
console.log(guestname);

guestname.forEach((guestname)=> {
    console.log(`Dear ${guestname}, I would like to invite you on dinner, please join`)
    
})
export{};