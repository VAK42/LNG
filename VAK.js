"use strict";

// Variables
var x = 0;
let y = 0;
const z = 0;

/*
| Feature       | var                   | let                       | const                     |
|---------------|-----------------------|---------------------------|---------------------------|
| Scope         | Function - Global     | Block                     | Block                     |
| Hoisting      | Hoisted - Initialized | Hoisted - Not Initialized | Hoisted - Not Initialized |
| Reassignment  | Yes                   | Yes                       | No                        |
| Redeclaration | Yes                   | No                        | No                        |
| Modern Usage  | Avoid - Legacy        | Use For Mutable Vars      | Use For Constants         |
*/

// Data Types
let a = 42;             // Number: Integer
let b = 3.14;           // Number: Float
let c = Infinity;       // Number: Infinity
let d = -Infinity;      // Number: -Infinity
let e = NaN;            // Number: NaN
console.log(NaN ** 0);  // NaN ** 0 = 1
let f = 100n;           // BigInt
let g = "JS";           // String
let h = true;           // Boolean
let i = null;           // Null: Unknown / Empty
let j;                  // Undefined: Declared But Not Assigned
let k = { key: "0" };   // Object
let l = Symbol("id");   // Symbol

// Interaction
alert()
prompt()
confirm()

// Basic Operators
let m = x + 2;  // Operand: The Value Or Variable That An Operator Is Applied To
let n = -x;     // Unary: A Single Operand
let o = a + b;  // Binary: Two Operands

// Maths
let p = a + b;   // Addition
let q = a - b;   // Subtraction
let r = a * b;   // Multiplication
let s = a / b;   // Division
let t = a % b;   // Remainder
let u = a ** b;  // Exponentiation

let v = "VAK" + "42";  // String Concatenation
let w = +"42";         // Numeric Conversion

// Bitwise Operators
let A = a & b;    // AND
let B = a | b;    // OR
let C = a ^ b;    // XOR
let D = ~a;       // NOT
let E = a << 1;   // LEFT SHIFT
let F = a >> 1;   // RIGHT SHIFT
let G = a >>> 1;  // ZERO-FILL RIGHT SHIFT

// Comparisons
console.log(null === undefined);  // False
console.log(null == undefined);   // True
console.log(null > 0);            // False
console.log(null == 0);           // False
console.log(null >= 0);           // True
console.log(undefined > 0);       // False
console.log(undefined < 0);       // False
console.log(undefined == 0);      // False
console.log(+null);               // 0
console.log(+undefined);          // NaN

// Conditional Statements
if (a > b) {
  console.log("a > b");
} else {
  console.log("a <= b");
}

if (a > 20) {
  console.log("a > 20");
} else if (a > 5) {
  console.log("a > 5");
} else {
  console.log("a <= 5");
}

a > b ? "A" : "B";
a > 20 ? "A" : a > 15 ? "B" : "C";

// Logical Operators
console.log(true || false);  // OR
console.log(true && false);  // AND
console.log(!true);          // NOT

// Nullish Coalescing Operator
let H = null;
let I = undefined;
console.log(H || "Nullish");     // First Truthy
console.log(I ?? "Coalescing");  // First Defined

// Loops
i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

for (let j = 0; j < 3; j++) {
  console.log(j);
}

// Switch Statement
let J = "B";
switch (J) {
  case "A":
    console.log("X");
    break;
  case "B":
    console.log("Y");
    break;
  case "C":
    console.log("Z");
    break;
  default:
    console.log("W");
}

// Functions
function name(param) {
  console.log(param);  // Function Declaration
}

let Name = function (param) {
  console.log(param);  // Function Expression
};

let NAME = (arg) => {
  console.log(arg);    // Arrow Function
};

// Objects
let K = new Object();  // Object Constructor
let P = "P";

// Object Literal
let L = {
  M: "MO",
  N: "NO",
  [P]: "PO"  // Computed Property
};

console.log(L.M);       // MO
console.log(L.N);       // NO
L.O = true;             // Add Property
delete L.O;             // Remove Property
L["M N"] = 0;           // Add Multiword Property
console.log(L["M N"]);  // 0
delete L["M N"];        // Remove Multiword Property

// OBJ
function Q(A, B) {
  return {
    A: A,
    B: B
  };
}

let R = Q("VAK", 42);
console.log(R.A);     // VAK
console.log(B in R);  // True

// Loop
for (let k in L) {
  console.log(k);     // M - N
  console.log(L[k]);  // MO - NO
}

// Comparison
let S = {};
let T = {};
let U = S;
console.log(S == U);   // True
console.log(S === U);  // True
console.log(S == T);   // False
