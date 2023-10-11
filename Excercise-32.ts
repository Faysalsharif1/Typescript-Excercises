/*32. Checking Usernames: Do the following to create a program that simulates how
websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
 Make another list of five usernames called new_users. Make sure one or two of the
new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If
it has, print a message that the person will need to enter a new username. If a username
has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should
not be accepted*/

const current_users:string []= ["Ali","Mubashar","Afzaal","Zia","Amir","Faysal"];
const new_users:string [] =["Ahsan","Sameer","Babar","faysal","Imran","Adnan"];

// const num1:number[]= [1,2,3,4,5,6,7,8,9,10];
// console.log(num1);
// const num2:number[]=    num1.map(i => i **2);
// console.log(num2);
function  checkUserName(current_users:string[], new_users:string[]):void {

    const Lowercasedcurrentusers = current_users.map(users => users.toLowerCase())
    for (const newuser of new_users) {
        const Lowercasednewusers = newuser.toLowerCase();
        if (Lowercasedcurrentusers.includes(Lowercasednewusers)) {
            console.log(`The username ${newuser} has already been used`);
        } else {
            console.log(`The username ${newuser} is available`);
        }

    }


}

checkUserName(current_users,new_users);

export{};
