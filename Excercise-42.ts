/*42. Great Magicians: Start with a copy of your program from Exercise 39. Write a
function called make_great() that modifies the array of magicians by adding the
phrase the Great to each magician’s name. Call show_magicians() to see that the
list has actually been modified.*/

const magicianNames:string[] = ["David Copperfield","David Blane", "Cris Angels", "Dynamo","Shin Limm","Penn and Teller"];

function show_magicians(names:string[]) {

    for ( const magician of magicianNames) 
    console.log(magician);
}

function make_great(Magicians:string[]) :string [] {
const greatmagicians:string [] = Magicians.map(magician =>
    `The Great ${magician}`);

    return greatmagicians;

}

show_magicians(magicianNames)
export{};