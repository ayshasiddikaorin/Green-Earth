## 1) Difference between `var`, `let`, and `const`  
- `var`: Function-scoped, can be redeclared, hoisted.  
- `let`: Block-scoped, cannot be redeclared, value can be updated.  
- `const`: Block-scoped, cannot be redeclared or updated.  



## 2) Difference between `map()`, `forEach()`, and `filter()`  
- `map()`: Creates a new array by transforming each element.  
- `forEach()`: Iterates over array elements, returns nothing.  
- `filter()`: Creates a new array with elements that pass a condition.  



## 3) What are arrow functions in ES6?


Arrow functions in ES6 provide a shorter and more concise syntax for writing functions without using the `function` keyword. They also inherit the `this` value from their surrounding context, which avoids common issues with the traditional `function` keyword. Arrow functions are ideal for callbacks and concise function expressions, but they cannot be used as constructors or with the `arguments` object.


## 4) How does destructuring assignment work in ES6?

In ES6, destructuring assignment allows you to extract values from arrays or objects and assign them to variables in a very concise way. For arrays, you can assign elements to variables based on their position, and for objects, you can assign properties to variables with matching names. This feature makes the code cleaner and easier to read, especially when working with multiple values from arrays or objects.



## 5) 5) Explain template literals in ES6. How are they different from string concatenation?

Template literals in ES6 are string literals enclosed in backticks (`` ` ``) that allow embedding variables and expressions directly using `${...}`. They make it easier to create dynamic strings without using the `+` operator for concatenation. Unlike traditional string concatenation, template literals are cleaner, more readable, and support multiline strings, making code simpler and more maintainable.