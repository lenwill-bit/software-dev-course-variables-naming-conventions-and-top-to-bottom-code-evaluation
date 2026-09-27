/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).   
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  So you know what the variable is for just by looking at it.
  - What are the common pitfalls to avoid when naming variables?
  Using names that are too short like a or x, starting a name with a number, or using words JavaScript already uses like let.
  - How do clear variable names benefit team collaboration?
  Everyone on the team can read the code and know what's going on without having to ask.
*/

let name = "Alice";
let items = 5;
let total = 20;
let store = "Shoppe";
let day = "Monday";
let message = "On " + day + ", " + name + " bought " + items + " items for $" + total + " at " + store + ".";

console.log(message);
