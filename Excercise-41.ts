/*41. Magicians: Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array.*/


const magicianNames:string[] = ["David Copperfield","David Blane", "Cris Angels", "Dynamo","Shin Limm","Penn and Teller"];

function show_magicians(names:string[]) {

    for ( const magician of magicianNames) 
    console.log(magician);
}

// call the function to show magicians name

show_magicians(magicianNames);

export{};
