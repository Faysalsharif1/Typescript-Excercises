/*31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is
printed.*/
let usernames = ["admin", "Muhammad Ali", "Kashif", "Ehsan", "Afzaal"];
function greetusers(usernames) {
    if (usernames.length == 0) {
        console.log("We need to find some users!");
        return;
    }
    for (let username of usernames)
        if (username == "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello,${username},  thank you for logging in again`);
        }
}
console.log(`\n greet user for non empty usernames`);
greetusers(usernames);
usernames = [];
console.log(`\n greet user for empty array`);
console.log(usernames);
export {};
