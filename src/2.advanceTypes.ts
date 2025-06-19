/**
 **  Advance Data Types
 **  Type Assertions,
 **/

// Assertions
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
