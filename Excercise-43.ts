/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the function
make_great() with a copy of the array of magicians’ names. Because the original
array will be unchanged, return the new array and store it in a separate array. Call
show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/


const magicianNames:string[] = ["David Copperfield","David Blane", "Cris Angels", "Dynamo","Shin Limm","Penn and Teller"];

function show_magicians(Magicians:string[]):void {

    for ( const magician of Magicians) 
    console.log(magician);
}

function make_great(Magicians:string[]) :string [] {
const greatmagicians:string [] = Magicians.map(magician =>
    `The Great ${magician}`);

    return greatmagicians;

}


const greatmagiciansNames : string[]= make_great(magicianNames);


console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\n Great magicians Names: \t");

show_magicians(greatmagiciansNames);

export{};