---
title: "Eloquent Javascript: A Modern Introduction to Programming"
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
author: "Marijn Haverbeke"
---

## Introduction + Chapter 1 "Values, Types, and Operators" - Wednesday - July 22nd 7pm PST.

1. What does ES6 stand for (page 6)? What does ECMAScript stand for? When was ES6 introduced? What is a new feature of ES6?
2. Why is the conditional operator also called “the ternary operator”(page 18)? Why is it commonly used in the React render function?
3. In JavaScript, why does `console.log("5" - 1) outputs 4` and `console.log("5" + 1) outputs 51`? How can you prevent automatic type conversion when comparing values? (pages 18-19)
4. Why does `NaN == NaN` return false? (page 17)

## July 29th | Chapter 2 "Program Structure"

What was your solution for the FizzBuzz exercise (p. 38)*?
*Be prepared to share your screen and walk us through your thinking process.
How was it different from the solution from the book?

## August 5th | Chapter 3 "Functions"

1.  What is the meaning of “lexical scoping”? (p. 42)
    What is the access limit for variables declared using the keywords “var”, “let”, and “const” in the lexical scope? (p. 41)
2.  What is the meaning of “call stack”? (p. 45)
    What is an example of “function definition” vs “function call”? (p. 39)
3.  How does this chapter define “closure”? (p. 48)
    How would you explain it in your own words?
4.  What is “function recursion”?
    What are some pros and cons of using recursive functions? (p. 49)

## August 12th | Chapter 4 "Data Structures: Objects and Arrays"

Zoom Whiteboard (Share your screen with your solution and walk the group through your logic).

Exercise 1: The sum of a range (p. 79)
Exercise 4: Deep comparison (p. 81)

## August 19th | Chapter 5 "Higher-order Functions"

1. What is a higher-order function? (p. 85)
2. What is something new you’ve learned from this chapter?
3. What is the difference between the array methods filter, map and reduce? (p. 87-89)
4. What is another example of an array method other than filter, map or reduce? (Research and explain what this method does)

## August 26th | Chapter 6 "The Secret Life of Objects"

1. What is Object Oriented Programming (p. 97)? What are the 4 pillars of OOP?
2. What does Encapsulation mean in OOP? Can you give an example? (p. 97)
3. What does Polymorphism mean in OOP? Can you give an example? (p. 106)
4. What does Inheritance mean in OOP? Can you give an example? (p. 112)
5. What does Abstraction mean in OOP? Can you give an example? (Not mentioned in the chapter)

## September 2nd | Chapter 8 "Bugs and Errors"

6. What are some of the benefits of using Strict Mode in your JavaScript code? (p. 129)
7. What are some ways of debugging code? (p. 132-133)
8. How can we manage exceptions in JavaScript? (p. 135-136)
9. What does blanket-catching an exception mean? Why is it dangerous to do? (p. 139)
10. What does the “for(;;) { }” statement do? (p. 139

## September 9th | Chapter 9 "Regular Expressions"

Whiteboard Solution: Quoting style (p. 165, Exercise 2)
Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.
Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement.

Text: "'I'm the cook,' he said, 'it's my job.'"
Output: "I'm the cook," he said, "it's my job."

## (TUESDAY) September 15th | Chapter 10 "Modules"

1.  What is a module? (p. 167) What is an example of a module in a web app code?
2.  What is the relation between modules called? (p. 167)
3.  What is CommonJS? Why was that useful and why is that obsolete today? (p. 171-173)
4.  How do you import and export modules in ES6 compared to ES5? (p. 171 - 174)
5.  What JS bundlers and compilers do you use? (i. e. Webpack, Parcel, Babel, PyJS)? Why do you need to use them? What do you like and what do you dislike about them?

## Sep 22nd | Chapter 11 "Asynchronous Programming"

Q1. What is a function callback? (p. 183)
Q2. What is a Promise? (p. 185)
Q3. How do Promises and callbacks work together in asynchronous code? (p. 185)
Q4. What is an async/await function in JavaScript? (p. 195-196)

## Chapter 13 "JavaScript and the Browser" | Sep 29th

Q1. What does HTTP mean and what is it used for? (p. 217)
Q2. What is a TCP and how does it work? (p. 217)
Q3. What is the World Wide Web? Why isn’t it the Internet as a whole? (p. 218)
Q4. What is the difference of using http vs https? (p. 218)
Q5. What are some ways of solving browser compatibility issues?

## Chapter 14 "The Document Object Model" | Oct 6th

Q1. What is the DOM? (p. 224)
Q2. What JS methods are available to rearrange html nodes and what do they do? (p. 229-230)
Q3. What is the difference of offsetHeight, clientHeight and getBondingClientRect (p. 233)
Q4. Where can the binding pageYOffset be useful in a page layout? (p. 233)
Q5. How do you usually write your styles? Do you use any external libraries, preprocessors, modules, packages, css in js?

## Chapter 15 "Handling Events" | Oct 13th

Q1. How can you remove a handler from the DOM element? (p. 244-245)
Q2. How can you stop propagating an event to its parent nodes? (p. 246)
Q3. What events can be fired from mouse clicks and in which order they occur? (p. 249)
Q4. What type of events can be handled in JavaScript other than click events? What are some useful applications for handling those events? (p. 252-255)
Q5. What is a web worker? How does it differ from service workers?

## Chapter 17 "Drawing on Canvas" | Oct 20th

EXERCISE 1 "SHAPES" (p. 306)
Feel free to try exercise 1 from chapter 17. If you have a solution for one or more shapes, you can screen share and walk the group through your steps. Otherwise, we’ll go through the solution from the book together.

## Chapter 18 "HTTP and Forms" | Oct 27th

What does the request response status code mean? Can you give an example of an issue you have experienced with http requests and what could be a possible way for debugging it? (p. 309)
How can you solve the CORS blocking issue when making http requests to different domains? (p. 313-314)
What are some use cases for intercepting the form submission default event? (p. 320)
What properties are available to files selected on file fields? How does knowing those properties can be useful when developing an application? p. 324)

## Chapter 20 "Node.js" | Nov 3rd

Q1. What are some possible ways of running the node command? (p. 351)
Q2. What JavaScript bindings are included in Node.js and which ones are not? (p. 352)
Q3. How does the semantic versioning works on NPM packages versions? (p. 355)
Q4. How does the HTTP module work? (p. 357-359)