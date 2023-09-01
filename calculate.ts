import inquirer from "inquirer";
import { Sum } from "./add.js";
import { Sub } from "./sub.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";


let answer = await inquirer.prompt([
  {
    message: "enter first num",
    type: "number",
    name: "firstnum",
  },
  {
    message: "enter second num",
    type: "number",
    name: "secondnum",
  },

  {
    message: "what operation do you want to perform",
    choices: ["Sum", "Sub", "multiply", "divide"],
    type: "list",
    name: "operator",
  },
]);

if (answer.operator === "Sum") {
  let result1 = Sum(answer.firstnum, answer.secondnum);
  console.log(result1);
} else if (answer.operator === "Sub") {
  let result2 = Sub(answer.firstnum, answer.secondnum);
  console.log(result2);
} else if (answer.operator === "multiply") {
  let result3 = multiply(answer.firstnum, answer.secondnum);
  console.log(result3);
} else if (answer.operator === "divide") {
  let result4 = divide(answer.firstnum, answer.secondnum);
  console.log(result4);
}
