//  import the crypto module
const { randomBytes } = require("crypto");

//  get a commands using process.argv

//retrieving the operation and values from terminal 
const operation = process.argv[2];
let a = +process.argv[3];
let b = +process.argv[4];

// Convert degrees to radians
const ar = a * (Math.PI / 180);

// complete the  function

// A Function to generate random numbers
const randomNumber = (a) => {
  if (!a) {
    console.log("Provide length for random number generation.");
    return;
  }
  randomBytes(a, (err, buff) => {
    if (err) {
      console.log(err);
    }

    console.log(
      `${buff.length} bytes of random data : ${buff.toString("binary")} `
    );
  });
};

switch (operation) {
  case "add":
    console.log("Addition : ", a + b);
    break;
  case "sub":
    console.log("Subtraction : ", a - b);
    break;
  case "multi":
    console.log("Multiplication : ", a * b);
    break;
  case "div":
    console.log("Division : ", a / b);
    break;
  case "sine":
    console.log("Sine val : ", Math.sin(ar));
    break;
  case "cos":
    console.log("Cos val : ", Math.cos(ar));
    break;
  case "tan":
    console.log("Tan val : ", Math.tan(ar));
    break;
  case "random":
    randomNumber(a)
    break;
  default:
    console.log("Invalid operation");
}
