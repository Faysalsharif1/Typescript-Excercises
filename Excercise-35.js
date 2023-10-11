/*35. Animals: Think of at least three different animals that have a common
characteristic. Store the names of these animals in a list, and then use a for loop
to print out the name of each animal. • Modify your program to print a statement
about each animal, such as A dog would make a great pet. • Add a line at the end
of your program stating what these animals have in common. You could print a
sentence such as Any of these animals would make a great pet!*/
const animal = ["Cat", "Dog", "Goat"];
for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
}
// print a statement about each animal
console.log(`\n Statement about each animal`);
for (const i of animal) {
    if (i === "Cat") {
        console.log(`A ${animal} is an adorable pet`);
    }
    else if (i === "Dog") {
        console.log(`A ${animal} would be a great pet`);
    }
    else if (i === "Goat") {
        console.log(`A ${animal} is a nice pet, that also gives us milk`);
    }
}
// a common statement for these animals
console.log(`\n A Common Statement about each animal`);
console.log(`\n Any of these animal would be a great pet`);
export {};
