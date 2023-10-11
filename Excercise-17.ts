/*17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in
time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying
that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them
know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re
still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to
make sure you actually have an empty list at the end of your program.*/


let guestname : Array<String> = ["Ali","Jahanzaib","Muhammad ALi Jinnah","Zia Khan","Afzaal"];

//Print message to guest the only two person can be invited

for (let guest of guestname) {
    
    console.log("Dear", guest+ ", you are hereby informed that only two persons can be invited to dinner")}

    // removing guest from guestname until remain only two guest
while (guestname.length > 2) {

    let removeguest = guestname.pop() 
    console.log(`Dear ${removeguest}, Sorry! you are not invited to dinner`);
}

//print message to remaining guests that you are still invited to dinner
console.log(guestname);
for (let guest of guestname) {

    console.log(`Dear ${guest}, you are still invited to dinner`)}
 // empty guestname
 
 guestname.pop()
 guestname.pop()
 console.log(guestname);
 
 export{};