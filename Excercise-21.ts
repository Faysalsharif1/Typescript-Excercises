/* 21. They think of something you could store in a TypeScript Object. Write a program
that creates Objects containing these items.*/

const Bouquet=
{   
    name: "Spring Delight",
    price: 250,
    description: "Beautiful arrangement of Spring flowers"


}
// define array of an object

let bouquets: Array<typeof Bouquet> = [];

bouquets.push(Bouquet);
bouquets.push({
    name: "Summer Bliss",
    price: 300,
    description: "Beautiful arrangement of Summer flowers"
})

let Bouquet3 = {   
    name: "Red Hot",
    price: 350,
    description: "Beautiful arrangement of Red Roses"}

    bouquets.push(Bouquet3);

    bouquets.push({name:"Freshness", price: 400, description: "Beautiful arrangement of white & Yellow flowers"})

    console.log(bouquets);
export{};