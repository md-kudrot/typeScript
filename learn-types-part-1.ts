const count: number = 10
const myName: string = "John Doe"
const isStudent: boolean = true

// _________array________________
let students: string[] = ["Alice", "Bob", "Charlie"]

// _________<Number>________________
// single type array
let ages: Array<number> = [20, 25, 30]

// union type array / multiple type array
let position: (string | number)[] = ["Manager", 1, "Developer", 2]

// multi-dimensional array
let multiDim: string[][] = [["Alice"], ["Bob"], ["Charlie"]]

//_________tuple________________
let person: [string, number] = ["Alice", 25]

// ________any_______
let obj: any = { rad: 0 }
obj.dim = "123"

// console.log(obj)

// _______________function______________________

function sayMessage(message: string): string {
    return `hello ,${message}`
}

// console.log(sayMessage("kudrot"))

//  Inferring Types for Anonymous Functions in TypeScript

const candies: string[] = ["gummy", "apple", "nut", "orange"]

candies.forEach(function (c) {
    // console.log(c.toUpperCase())
})
// ______________________
function printColor(color: { name: string; code?: string; index: number }) {
    // console.log(`this is ${color.name} with ${color.index}`)
}

printColor({ name: "while", code: "#fff", index: 1 })

// optional properties(?)
printColor({ name: "while", index: 1 })

// ___________union__________
function getPosition(position: string | number) {
    if (typeof position === "string") {
        console.log(position.split(""))
    } else {
        console.log(position)
    }
}

// getPosition(12)
// getPosition("twelve")

// __________________any--------------
//<>

const nikeName: any = "brad"
const upperCased = (nikeName as string).toUpperCase()
//there another save way
const upperCased2 = (<string>nikeName).toUpperCase()

// _____________null / undefined__________

const testStr: string = "hello"

const greetings = [
    { name: "Oye" },
    { name: "Hello" },
    {
        name: "Hola"
    }
]

const found = greetings.find((greeting) => {
    greeting.name === testStr
})
// console.log(found.name)//possibly undefined(amaizing without run code it find the error)
