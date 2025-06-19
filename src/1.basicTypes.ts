/**
 **  Basic Data Types
 **  Primitive Data Type: String, Number, Boolean, Null, Undefined, Symbol --> (Immutable)
 **  Non Primitive Data Type: Object, Array, Tuple, Function() --> (Mutable)
 **  Union, Intersection, Never, Nullable, Unknown, Literal type
 **  Name Alias, Type Alias
 **/

// Primitive Data Type
// String
const courseName: string = "Typescript";

// Number
const courseDuration: number = 6.5;

// Boolean
const isAdvance: boolean = true;

// Null
const noValue: null = null;

// Undefined
const x: undefined = undefined;

// Non Primitive Data Types
// Array
const employees: string[] = ["Rahul", "Joy"];
const employeesIds: number[] = [1, 2];

// Tuple
const cordinates: [number, number] = [12.233, 23.322];
const info: [string, number, boolean] = ["Rahul", 28, true];

// Object
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
  companyName: "Google",
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
  hobby?: string;
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

// Variable Type Alias / Assertions
type FirstName = string;
const firstName: FirstName = "Rahul";

type IsEngineer = boolean;
const isSWE: IsEngineer = true;

// Function Type Alias / Assertions
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
  gender: "Male" | "Female"; // Literal type with Union
  bloodGroup: "O+" | "A+" | "B+" | "AB+";
};

const person: User = {
  name: "Rahul",
  gender: "Male",
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
