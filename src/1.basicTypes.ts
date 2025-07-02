/**
 **  Basic Data Types
 **  Primitive Data Type: String, Number, Boolean, Null, Undefined, Symbol --> (Immutable)
 **  Non Primitive Data Type: Object, Array, Tuple and Tuple Relataed, Function --> (Mutable)
 **  Union, Intersection, Never, Nullable, Unknown, Literal type, Optional Type
 **  Name Alias, Type Alias
 **/

// Primitive Data Type
// String Explicit Way
const courseName1: string = "Typescript";

// String Implicit Way
const courseName2 = "Typescript";

// Number
const courseDuration: number = 6.5;

// Boolean
const isAdvance: boolean = true;

// Null
const noValue: null = null;

// Undefined
const val: undefined = undefined;

// Non Primitive Data Types
// Array
const employees: readonly string[] = ["Rahul", "Joy"]; // The readonly keyword can prevent arrays from being changed.
const employeesIds: number[] = [1, 2];

// Tuple: A tuple is a typed array with a pre-defined length and types for each index.
const cordinates: [number, number] = [12.233, 23.322];
const info: readonly [string, number, boolean] = ["Rahul", 28, true]; // A good practice is to make your tuple readonly.

// Named Tuples
const graph: [x: number, y: number] = [55.2, 43.5];

// Destructuring Tuples
{
  const [x, y] = graph;
}

// Enums
enum CardinalDirections {
  North, //  Initialized value can 1 [North = 1]
  East,
  South,
  West,
}

const currentDirection = CardinalDirections.North;
console.log(currentDirection); // log result 0
const lastDirection = CardinalDirections.West;
console.log(lastDirection); // log result 3

// More
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// Enums can also contain strings.
enum CardinalDirections {
  north = "North",
  east = "East",
  south = "South",
  west = "West",
}

console.log(CardinalDirections.north); // logs "North"
console.log(CardinalDirections.west); // logs "West"

// Object in typed
let coder: {
  fName: string;
  mName?: string; // Optional Type
  lName: string;
  companyName: string;
  position: "SWE"; // Literal Type
  stack: string;
  experience: number;
  isActiveLearner: boolean;
} = {
  fName: "Rahul",
  lName: "Ghosh",
  companyName: "XYZ",
  position: "SWE",
  stack: "Web",
  experience: 3,
  isActiveLearner: true,
};

// Normal function
function normalFun(num1: number, num2: number = 50): number {
  return num1 + num2;
}
let total1: number = normalFun(10, 20);
console.log(total1);

// Arrow function
const arrowFun = (num1: number, num2: number): number => num1 + num2;
let total2: number = arrowFun(15, 15);
console.log(total2);

// Methods
const user1 = {
  balance: 0,
  methodFun(balance: number): number {
    return this.balance + balance;
  },
};
let total3: number = user1.methodFun(100);
console.log(total3);

// Callback function
const arr1 = [1, 2, 3];
let callbackFun: number[] = arr1.map((elem: number) => elem * elem);
console.log(callbackFun);

// Array -> Spread
const brotherGroup1: string[] = ["Sajib", "Rajib"];
const brotherGroup2: string[] = ["Kishor", "Shakil"];
const brotherGroupList: string[] = [...brotherGroup1, ...brotherGroup2];

// Object -> Spread
const modarator1: {
  typescript: string;
  react: string;
  redux: string;
} = {
  typescript: "Mr. x",
  react: "Mr. y",
  redux: "Mr.z",
};

const modarator2: {
  express: string;
  node: string;
  mongodb: string;
} = {
  express: "Mr. a",
  node: "Mr. b",
  mongodb: "Mr.c",
};

const modaratorList: {
  express: string;
  node: string;
  mongodb: string;
  typescript: string;
  react: string;
  redux: string;
} = {
  ...modarator1,
  ...modarator2,
};

// Rest
function friendsFun(...friends: string[]) {
  friends.forEach((friend: string) => {
    console.log(`Hi ${friend}.`);
  });
}
const friendsList = friendsFun("rahul", "joy", "sajib", "rajib");

// Array -> Destructureing
const arr2 = ["Sajib", "Rajib", "Rahul", "Rasel", "Karim", "Riaz", "Imam"];
const [, , joy, ...rest] = arr2;
console.log(joy); // output is "Rahul"

// Object -> Destructureing
const user2: {
  name: {
    fName: string;
    mName: string;
    lName: string;
  };
  contact: string;
  age: number;
} = {
  name: {
    fName: "Rahul",
    mName: "Chandra",
    lName: "Ghosh",
  },
  contact: "01700000000",
  age: 28,
};

const {
  contact,
  name: { lName: lastName }, // name alias
} = user2;

// Object Type Alias
type Student = {
  name: string;
  roll: number;
  isRegular: boolean;
  contact: string;
  gender: string;
  position: string;
  hobby?: string; // Optional Type
};

const student1: Student = {
  name: "Rajib",
  roll: 12,
  isRegular: true,
  contact: "01700000000",
  gender: "male",
  position: "first",
  hobby: "criket",
};

const student2: Student = {
  name: "Sajib",
  roll: 13,
  isRegular: true,
  contact: "01700000001",
  gender: "male",
  position: "first",
};

const student3: Student = {
  name: "Karim",
  roll: 14,
  isRegular: true,
  contact: "01700000002",
  gender: "male",
  position: "first",
};

// Variable Type Alias
type FirstName = string;
const firstName: FirstName = "Rahul";

type IsEngineer = boolean;
const isSWE: IsEngineer = true;

// Function Type Alias
type Add = (x: number, y: number) => number;
const add: Add = (num1, num2) => num1 + num2;

// Union Type
type FrontendDeveloper1 = "FakibarDeveloper" | "JuniorDeveloper";
type BackendDeveloper1 = "FakibarDeveloper" | "MidLevelDeveloper";

type FullStackDeveloper1 =
  | FrontendDeveloper1
  | BackendDeveloper1
  | "ExpertDeveloper";

const newDeveloper1: FullStackDeveloper1 = "ExpertDeveloper";

// More Example
type User = {
  name: string;
  email?: string;
  gender: "Male" | "Female" | "Other"; // Literal type with Union
  bloodGroup: "O+" | "A+" | "B+" | "AB+";
};

const person: User = {
  name: "Rahul",
  gender: "Other",
  bloodGroup: "B+",
};

// InterSection Type
type FrontendDeveloper2 = {
  skills: string[];
  designation1: "Frontend Developer";
};

type BackendDeveloper2 = {
  skills: string[];
  designation2: "Backend Developer";
};

type FullStackDeveloper2 = FrontendDeveloper2 & BackendDeveloper2;

const newDeveloper2: FullStackDeveloper2 = {
  skills: ["HTML", "CSS", "JS", "Node", "React"],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};

// Nullable Type
function searchAble(value: string | null) {
  if (value) {
    console.log("Searchable Data API Calling");
  } else {
    console.log("Get All Data API Calling");
  }
}

searchAble(null);

// UnKnown Type
const getSpeedInMeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed = (value * 1000) / 3600;
    console.log(`The Speed is ${convertedSpeed} ms^-1`);
  } else if (typeof value === "string") {
    const [val, unit] = value.split(" "); // array destructureing
    const convertedSpeed = (parseFloat(val) * 1000) / 3600;
    console.log(`The Speed is ${convertedSpeed} ms^-1`);
  } else {
    console.log("Wrong Input");
  }
};

// Never Type
const thorwError = (errMsg: string): never => {
  throw new Error(errMsg);
};
thorwError("Error Khaiso");
