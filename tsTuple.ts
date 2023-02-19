let myArray2:(string | boolean)[] = ["yes", true]

myArray2 = [true, "no"]

// lets learn about tuples
// tuples are a way to create an array with a fixed number of elements
// each element in the tuple has a specific type
// tuples are useful when you know the exact number of elements in an array
// and the type of each element

//bg color, header color, footer color using rgba values which mean
//alpha is the opacity of the color
let bgColor: [number, number, number, number]
let headerColor: [number, number, number, number?]

bgColor = [0, 255, 255, 0.5, ] //cyan
headerColor = [0, 255, 255] //