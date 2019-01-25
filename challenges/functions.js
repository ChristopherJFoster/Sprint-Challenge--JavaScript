// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */

const consume = (a, b, callback) => {
  return callback(a, b);
};

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const greeting = (firstName, lastName) =>
  `Hello ${firstName} ${lastName}, nice to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// Note: Since the instructions for Step 2 say to return the results and not log the results, I've added console.log() here to see check the results:
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: When myFunction() is called, it logs the constant external, declares the constant internal, then declares the function nestedFunction(). Since nestedFunction() is declared and not expressed, it does NOT create closure, and therefore does NOT capture its lexical context (which at the time would include both the constants internal and external). The reason nestedFunction() can access the constant internal is because nestedFunction() is called inside myFunction(), whose scope includes the constant internal. See answer to question 3 in README.md for an example of code that includes closure.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
