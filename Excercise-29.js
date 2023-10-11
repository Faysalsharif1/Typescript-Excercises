/*29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of
independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your
array. If the fruit is in your array, the if block should print a statement, such as I really
like bananas!*/
const favorite_fruits = ["bananas", "Mangoes", "apples"];
if (favorite_fruits.includes("bananas")) {
    console.log("I really like bananas!");
}
if (favorite_fruits.includes("oranges")) {
    console.log("I really enjoy oranges!");
}
if (favorite_fruits.includes("apples")) {
    console.log(" Apples are delicious!");
}
if (favorite_fruits.includes("Mangoes")) {
    console.log("Mangoes are really sweet!");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("Grapes are really juicy!");
}
export {};
