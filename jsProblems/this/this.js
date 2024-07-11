"use strict";

// this is global scope

console.log(this); // window object (this refers to always global object incase of browser its window and in nodejs it is global)

// this inside a function

function x() {
  // the value depends on if its strict mode or not.
  // if it is not strict mode this refers to global object
  // in strict mode this is undefined here
  console.log("inside x", this);
}

// this in non-strict mode - (this substitution)
// Note:- if at any place this is undefined or null then in that case this will be replaced by global object and this happens only if it is not strict mode

// this value depends on how this is called (window)
x(); // in this case this will be undefined (in strict mode)
window.x(); // here this will be referred to window object (hence this value depends on how the function is called)

// this inside a object's method
const student = {
  name: "Gangadhar",
  printName: function () {
    // printName is method inside obj
    console.log(this.name);
  },
};

student.printName(); // if we call like this then this refers to the obj itself

// call apply bind methods (sharing methods)

const lecturer = {
  name: "Gayathri",
};

student.printName.call(lecturer); // printName method is shared by using call (this will be replaced with lecturer obj)

// this inside arrow function
// Arrow functions differ in their handling of this: they inherit this from the parent scope at the time they are defined.
// This behavior makes arrow functions particularly useful for callbacks and preserving context.
// However, arrow functions do not have their own this binding.
// Therefore, their this value cannot be set by bind(), apply() or call() methods, nor does it point to the current object in object methods.
const obj = {
  a: 10,
  x: () => {
    console.log("this", this); // here this refers to window object read first line you will understand
  },
};

obj.x();

// this inside nested arrow function

const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      // enclosing lexical context
      console.log("this", this); // here this refers to obj2, read first line you will understand
    };
    y();
  },
};

// this inside dom
// this refers to Html element
