# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file. Each of those files contain JavaScript problems you need to solve. If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

   .forEach is an array method that executes a function (provided as an argument) once for each element in the array. .forEach does not itself return anything (though the provided function could be written to return a value during execution).

   .map is an array method that executes a function (provided as an argument) once for each element in the array. Unlike forEach, .map itself returns a new array that contains the results of each function execution.

2. What is the difference between a function and a method?

   A (non-method) function is one that is not a property of any object (other than the global object(?)). It can be called in any place whose scope includes the function’s definition by using the function’s name + (): someFunction()

   A method is function that is a property of an object. A method is called by using the object's name + . + the method’s name + (): someObject.methodName()

   All squares are rectangles, but not all rectangles are squares. Likewise, all methods are functions, but not all functions are methods.

3. What is closure?

   Closure refers to the fact that in JavaScript, functional expressions capture their lexical context at the time they are expressed (note that a function declaration will not create closure). When a function is expressed inside another function, the expressed function’s scope at that time includes the local and global scopes (we’ll assume here that the function is expressed only one function deep). Closure means the expressed function captures references to the variables available at the time in the local and global scopes. This remains true even if the expressed function is called outside the function in which it was expressed. The expressed function will “see” variables in the local scope even when it is called in the global scope:

   (Sorry about the code formatting. I'm not sure how to fix it.)

   const aFunction = () => {
   const greeting = "Hello!";
   const anotherFunction = () => {
   console.log(greeting);
   };
   return anotherFunction;
   }
   const yetAnotherFunction = aFunction();
   yetAnotherFunction(); // Hello!

   Closure is the reason that yetAnotherFunction() logs Hello! even though greeting is in the local scope of aFunction().

4. Describe the four rules of the 'this' keyword.

   1. Window/Global Object Binding:
      In JavaScript, the `this` keyword always refers to an object. All JavaScript is inside the window/global object. When `this` is used and it it doesn't meet the criteria for either 2, 3, 4 below, `this` will refer to the window/global object. This is usually unintended behavior.

   2. Implicit Binding:
      When a method (i.e., a function that is a property of an object) employs the `this` keyword, `this` refers to the object of which the method is a property. This principle is useful when a method needs to refer to its own object or its object's properties.

   3. New Binding:
      A constructor function creates new objects. When a constructor function is called using the `new` keyword, any `this` keyword that appears inside the constructor function refers to the object that is being created. This principle is useful when setting the properties of a new object.

   4. Explicit Binding:
      If JavaScript's call(), apply(), or bind() method is used, any `this` keyword in the invoked function will refer to the object supplied as the argument for the call()/apply()/bind(). Thus `this` is explicitly bound to the supplied object.

5. Why do we need super() in an extended class?

   super([arguments]) is used in an extended class to call the parent class’s constructor. The arguments supplied to super() (generally a set of properties or values) are used by the parent constructor class to assign values to the keys defined in the parent class. The resulting properties are then used in the creation of the extended class object. This process is how an extended class inherits the properties of the parent class. super() is required in the constructor function of the extended class, and super() must come before any use of the this keyword inside the constructor function.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements. You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays

Test your knowledge of objects and arrays.

- [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started. Read the instructions carefully!

## Task 2: Functions

This challenge takes a look at callbacks and closures as well as scope.

- [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.

- [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.

- [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
