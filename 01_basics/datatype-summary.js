// Primitive or call by value
// String, Number, Boolean, null, undefined,Symbol, BingInt
const someString="harshta"
const score = 100
const scoreValue = 10.3

const isLogedIn = false
const outsideTem= null
let userEmail; //undefined


//Symbol
const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id===anotherID) //false beacuse the sybloe give unique value

// const bigNumber = 56789987654345678245n

// is js dynamic type or not?
//yse it is Dynamic typed


//Non Primitive or call by reference
// Array, Objects, Functions

//Array example
const heros =["shaktiman", "naagraj", "doga"]

//object example
let myObje = {
    name: "harshat",
    age: 22
}


//Function 

const myFun = function(){
    console.log("Hello world");
}
