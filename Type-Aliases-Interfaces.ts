type magicNumber = number

const banana: magicNumber = 20

// ________________
type Employee = {
    id: number
    name: string
    email: string
    salary: number
    address?: string //optional (address na dileo chillabe na)
}

const adam: Employee = {
    id: 4,
    name: "kk",
    email: "kk@gmail.com",
    salary: 2000
}
console.log(adam)

//________________
type Department = {
    name: string
    employees: Employee[]
}

const sales: Department = {
    name: "Sales",
    employees: [adam]
}

// ______________
type ISBN = Number | string

const bookISBN1: ISBN = 838
const bookISBN2: ISBN = "alkj"

// _____________intersection operator________

type User = {
    id: number
    name: string
    email: string
    password: string
}

type Admin = User & {
    role: "admin"
}

type Customer = User & {
    role: "customer"
}

const admin: Admin = {
    id: 1,
    name: "alex",
    email: "a@",
    password: "a;ljdf",
    role: "admin"
}
const customer: Customer = {
    id: 1,
    name: "belex",
    email: "b@",
    password: "a;ljdf",
    role: "customer"
}

// ____________________
type starsWithKK = `KK${string}`
const kkDiaSuru: starsWithKK = "KK MD Kamrujjaman" //KK dia suru na korle sillabe
