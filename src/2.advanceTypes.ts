/**
 **  Advance Data Types
 **  Type Assertions
 **  Interface
 **  Generic Types
 **  Generic --> Interface, Function, Tuple
 **  Constraints and Constraints with Keyof
 **  Conditional Type
 **  Mapped Type
 **  Lookup
 **  More Type --> Pick, Omit, Readonly, Partial, Requied, Record, EmptyObject
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
// generic --> Interface/Object
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

// Generic in Function
const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};

type Person = {
  name: string;
  job: "SWE";
  age?: 20;
};
const res1 = createArrayWithGeneric<string>("Bangladesh");
const res2 = createArrayWithGeneric<number>(100);
const res3 = createArrayWithGeneric<Person>({ name: "Mr. X", job: "SWE" });

// Generic in Tuple
const createTupleWithGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};

const res4 = createTupleWithGeneric<string, boolean>("Bangladesh", true);
const res5 = createTupleWithGeneric<Person, boolean>(
  { name: "Mr. X", job: "SWE" },
  true
);

// Generic with Fixed value
const addCourse = <T>(params: T) => {
  const course = "Learn Typescript";

  return {
    ...params,
    course,
  };
};

const student4 = addCourse<{ name: string; age: number }>({
  name: "Mr. X",
  age: 20,
});

// Constraints
const addCourseToStudent = <
  T extends { id: number; name: string; email: string } // Constraints property
>(
  params: T
) => {
  const course = " Typescript";

  return {
    ...params,
    course,
  };
};

const student5 = addCourseToStudent<{
  id: number;
  name: string;
  email: string;
  hasWatch: boolean;
}>({
  id: 1,
  name: "Mr. X",
  email: "x@gmail.com",
  hasWatch: true,
});

const student6 = addCourseToStudent<{
  id: number;
  name: string;
  email: string;
  hasMobile: boolean;
}>({
  id: 1,
  name: "Mr. X",
  email: "x@gmail.com",
  hasMobile: true,
});

// Constraint with Keyof
type Vehicle = {
  bike: string;
  car: string;
  ship: string;
};

type Owner = "Bike" | "Car" | "ship"; // Manual "Bike" | "Car" | "ship";
type Owner2 = keyof Vehicle; // Dynamic "Bike" | "Car" | "ship";

// More Example
const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const employee = {
  name: "Mr. X",
  age: 25,
  salary: 20000,
};

const car = {
  name: "X Corola",
  model: 2020,
};
const res6 = getPropertyValue(employee, "name");
const res7 = getPropertyValue(car, "model");

// Asynchronous / Promise Type
const createPromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Something";

    if (data) {
      resolve(data);
    } else {
      reject("Failed");
    }
  });
};

const showData = async (): Promise<string> => {
  const data: string = await createPromise();
  return data;
};

//More Example
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
const getTodo = async (): Promise<Post> => {
  const data: Response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const resp: Promise<Post> = data.json();

  return resp;
};

// Conditional Type
type A1 = null;
type B1 = undefined;

type X1 = A1 extends null
  ? B1 extends undefined
    ? undefined
    : number
  : string;

// More Example

type Shekh = {
  bike: string;
  car: string;
  plane: string;
  ship: string;
};

type VehicleCheck<T> = T extends keyof Shekh ? true : false;
type HasBike = VehicleCheck<"plane">;

// Mapped Type
type AreaNumber = {
  width: number;
  height: number;
};

type AreaString = {
  [index in keyof AreaNumber]: string; // mapped
};

// Lookup type
type Height = AreaNumber["height"];

// Utility Type
type Person2 = {
  name: string;
  age: number;
  email?: string; // Optional Type
  contactNo: string;
};
// Pick
type NameAge = Pick<Person2, "name" | "age">; // Take element

// Omit
type contactInfo = Omit<Person2, "name" | "age">; // Remove element

// Required
type RequiredType = Required<Person2>;

// partial
type Partial2 = Partial<Person2>;

//ReadOnly
type ReadOnly1 = Readonly<Person2>;

// Record
type MyReacord = Record<string, string>;

const myObj: MyReacord = {
  a: "Hello",
  b: "world",
};

// Empty Object
type EmptyObj = Record<string, unknown>;
const emptyObj: EmptyObj = {};
