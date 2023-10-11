/*27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.•
If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the
appropriate color alien.*/
// 1st version 
console.log(`\n  1st version of code`);
let alien_color = "Green";
if (alien_color === "Green") {
    console.log("You earned 5 points!");
}
else if (alien_color === "Yellow") {
    console.log("You earned 10 points!");
}
else if (alien_color === "Red") {
    console.log("You earned 15 points!");
}
// 2nd version
console.log(`\n 2nd version of the code`);
alien_color = "Red";
if (alien_color === "Red") {
    console.log("You earned 15 points!");
}
if (alien_color === "Green") {
    console.log("You earned 5 points!");
}
if (alien_color === "Yellow") {
    console.log("You earned 10 points!");
}
//3rd verison
console.log(`\n 3rd version of the code`);
alien_color = "Yellow";
if (alien_color === "Red") {
    console.log("You earned 15 points!");
}
if (alien_color === "Green") {
    console.log("You earned 5 points!");
}
if (alien_color === "Yellow") {
    console.log("You earned 10 points!");
}
export {};
