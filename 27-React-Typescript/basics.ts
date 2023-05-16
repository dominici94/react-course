// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function SVGUnitTypes, parameters

// Primitives

let age: number;

age = 12.11;

let username: string;

username = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = { isEmploye: true };

// Il tipo di people è: array di oggetti composti da name e age

let people: Person[];

// Type inference (deduzione) si tratta della deduzione che typescript attribuisce ad una variabile non dichiarata esplicitamente: esempio course riconosce che è di tipo string e non può essere assegnato un altro tipo

let course = "React - the complete guide";

// course = 1243; Error

// Union Type : |

let corso: string | number | boolean = "Typescript";

corso = 123456;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics
// Il generic indica un tipo generico: T è un placeholder che va ad adattarsi e indica che sono tutti gli elementi dello stesso tipo

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const strigArray = insertAtBeginning(["a", "b", "c"], "lettera");
