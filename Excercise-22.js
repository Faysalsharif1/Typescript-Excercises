/*22. intentional Error: If you haven’t received an array index error in one of your
programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the
program.

23. Conditional Tests: Write a series of conditional tests. Print a statement describing
each test and your prediction for the results of each test. Your code should look
something like this:*/
function createfruit(name, color, taste) {
    return {
        name,
        color,
        taste
    };
}
const fruits = [
    createfruit("Apple", "yellow", "sweet"),
    createfruit("Strawberry", "red", "sweet"),
    createfruit("Mango", "Yellow", "sweet"),
    createfruit("Orange", "orange", "Citrusy"),
    createfruit("Banana", "Off white", "sweet")
];
const invalidindex = 10;
console.log(`Fruits at invalid index: ${invalidindex}`, fruits[invalidindex]);
fruits.forEach((fruits) => console.log(`Name: ${fruits.name}, Color: ${fruits.color}, Taste: ${fruits.color}`));
export {};
