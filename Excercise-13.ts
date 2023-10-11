/* Q: 13 Your Own Array: Think of your favorite mode of transportation, such as a
motorcycle or a car, and make a list that stores several examples. Use your list to
print a series of statements about these items, such as “I would like to own a
Honda motorcycle.”*/

let favorite_transportation: Array <[Transport:string, brand: string]> =[]

favorite_transportation.push(["Bike", "Honda"])
favorite_transportation.push(["Car", "Toyota"])
favorite_transportation.push(["Bicycle", "Eagle"])

favorite_transportation.forEach(([Transport, brand])=> {

    console.log(`I would like to own ${brand} ${Transport}`);
}
)
export{};

