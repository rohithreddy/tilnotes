# Object Oriented JavaScript - Udacity

[course home udacity](https://www.udacity.com/course/ud015)

##### JavaScript is a programming language that adds interactivity to your website.

__Variables__

Variables are containers that you can store values in.

declaring a
```javascript
var myVariable;
```
assigning a value to variable
```javascript
myVariable = "crash";
```

declaring a variable with value

```javascript
var myVariable = "crash";
```
**Note**: JavaScript is case sensitive — myVariable is a different variable to myvariable. If you are getting problems in your code, check the casing!


**Data Types**

* String
* Number
* Boolean
* Array
* Object

**Comments**

```javascript
/*
Everything in between is a comment.
*/
```
```javascript
// This is a comment too
```

**_Operators_**

* Comparision Operators

    `==`

    `===`

**Equality (==)**
The equality operator converts the operands if they are not of the same type, then applies strict comparison. If both operands are objects, then JavaScript compares internal references which are equal when operands refer to the same object in memory.

_Examples_

```javascript
 1   ==  1        //true
"1"  ==  1        // true
 1   == '1'       // true
 0   == false     // true
 0   == null      // false

 0   == undefined // false
null  == undefined // true
```
**Inequality (!=)**
The inequality operator returns true if the operands are not equal. If the two operands are not of the same type, JavaScript attempts to convert the operands to an appropriate type for the comparison. If both operands are objects, then JavaScript compares internal references which are not equal when operands refer to different objects in memory.

_Examples_
```javascript
1 !=   2     // true
1 !=  "1"    // false
1 !=  '1'    // false
1 !=  true   // false
0 !=  false  // false
```

**Identity / strict equality (===)**
The identity operator returns true if the operands are strictly equal (see above) with no type conversion.

_Examples_

```javascript
3 === 3   // true
3 === '3' // false
```
**Non-identity / strict inequality (!==)
**
The non-identity operator returns true if the operands are not equal and/or not of the same type.

_Examples_

```javascript
3 !== '3' // true
4 !== 3   // true
```


**_Scopes_**

* Lexical Scope
* Global Scope

**Lexical Scope**

This describes regions in your source code where you can refer to the variable by name without getting _access_ errors


A _**new** Lexical Scope_ is created everytime we type a function definition


A **Execution Context** is created runtime as a in-memory datastore.


**_Closures_**
