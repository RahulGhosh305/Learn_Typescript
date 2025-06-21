/**
 **  Advance Data Types
 **  Type Assertions
 **  Interface
 **  Generic Types
 **/

// Type Assertions
let anything: any;
anything = "Next Level Typescript";
(anything as string).length; // type assertions

// more example
let anything2: any;
anything2 = 22;
(anything2 as number).toFixed(); // type assertions

// more example
function kgToGram(val: string | number): string | number | undefined {
  if (typeof val === "string") {
    const convertedData = parseFloat(val) * 1000;
    return `Convert result : ${convertedData}`;
  } else if (typeof val === "number") {
    const convertedData = val * 1000;
    return convertedData;
  }
}

const result1 = kgToGram(1000) as number; // this result1 return number
const result2 = kgToGram("1000") as string; // this result2 return string

//more example
type ErrorCase = {
  message: string;
};
try {
} catch (error) {
  (error as ErrorCase).message;
}

// Interface
interface PersonBasicInfo {
  name: string;
  age: number;
  gender: "Male" | "Female" | "Others";
}

interface EducationInfo extends PersonBasicInfo {
  education?: string;
}

interface PersonDetails extends EducationInfo {
  address: string;
}

// For Object Recommened Interface
const person1: PersonDetails = {
  name: "Mr,. X",
  age: 30,
  gender: "Male",
  address: "Bangladesh",
};

// More Example for Array
type RollList1 = number[];
// Alternative for Array
interface RollList2 {
  [index: number]: number;
}
let rollList: RollList1 = [1, 2, 3]; // For Array Recommended Type Alias

// More Example for Function
type Sum1 = (num1: number, num2: number) => number;
// Alternative for Function
interface Sum2 {
  (num1: number, num2: number): number;
}
const sum: Sum1 = (num1, num2) => num1 + num2; // For Function Recommended Type Alias

// Generic Types in Type
// array --> generic
type GenericArray<T> = Array<T>;

const arr4: GenericArray<number> = [1, 2, 3];
const arr5: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
const arr6: GenericArray<boolean> = [true, false, true, true];
type Person11 = {
  name: string;
  details: { age: number; gender: "Male" | "Female" };
};
const arr7: GenericArray<Person11> = [
  {
    name: "Mr. X",
    details: {
      age: 25,
      gender: "Female",
    },
  },
];

// tuple --> generic
type GenericTuple<X, Y> = [X, Y];

const arr8: GenericTuple<string, { age: number; gender: "Male" | "female" }> = [
  "Mr.X",
  { age: 30, gender: "Male" },
];

// Generic Types in Interface
// generic --> Interface

interface Developer<X, Y = null> {
  name: string;
  computer: {
    name: string;
    model: string;
    releaseYear: string;
  };
  smartWatch: X;
  bike?: Y;
}

interface PoorWatch {
  brand: string;
  model: string;
  display: string;
}
const poorDeveloper: Developer<PoorWatch> = {
  name: "Poor Dev",
  computer: {
    name: "HP",
    model: "ZBook",
    releaseYear: "2020",
  },
  smartWatch: {
    brand: "BitLock",
    model: "B22",
    display: "OLED",
  },
};

interface RichWatch {
  brand: string;
  model: string;
  display: string;
  heartBeat: boolean;
  so2: boolean;
}
interface Bike {
  name: string;
  model: string;
  cc: string;
}

const richDeveloper: Developer<RichWatch, Bike> = {
  name: "Rich Dev",
  computer: {
    name: "MacBook",
    model: "M4",
    releaseYear: "2025",
  },
  smartWatch: {
    brand: "Apple",
    model: "X-10",
    display: "Retina",
    heartBeat: true,
    so2: true,
  },
  bike: {
    name: "Royel Emfeild",
    model: "2025",
    cc: "400",
  },
};
