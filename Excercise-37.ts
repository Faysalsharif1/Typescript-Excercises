/*37. Large Shirts: Modify the make_shirt() function so that shirts are large by default
with a message that reads I love TypeScript. Make a large shirt and a medium
shirt with the default message, and a shirt of any size with a different message*/

function makeshirt(Size:string = "Large", Message:string="I Love Typescript"):void {

    return console.log(`Size: ${Size} , Message: ${Message}`)}

    // Large shirt with default message
    makeshirt();

    // Medium shirt with default message
    makeshirt("Medium");

    // Different size shirt with new message

    makeshirt("Small", "Hello Typescript");

    export{};