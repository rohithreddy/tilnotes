**Classes**

Classes in Scala cannot have static members.  You can use objects (see below) to achieve similar functionality as with static members in Java.

**Traits**

Traits are like interfaces in Java, but they can also contain concrete members, i.e. method implementations or field definitions.

**Objects**
Object in Scala are like classes, but for every object definition there is only one single instance.

**Packages**

Adding a statement such as package foo.bar at the top of a file makes the code in a file part of the package foo.bar. You can then do import foo.bar._ to make everything from package foo.bar available in your code. The content of a package can be scattered across many files. If you define a class MyClass in package foo.bar, you can import that specific class (and not anything else from that package) with import foo.bar.MyClass.


```scala
object HelloWorld extends App {
  println("Hello, World!")
}
```

```scala
object HelloWorld {
  def main(args: Array[String]) {
    println("Hello, World!")
  }
}

```

In Scala, the main or entry point method is defined in an object. An object can be made executable by either adding extending the type App or by adding a method def main(args: Array[String]).



**Programming Paradigms**

In science *Paradigm* describes distinct concepts or thought patterns

Main programming paradigms

* imperative programming
* functional programming
* logic programming
* object oriented Programming


**Imperative Programming**

* modifying mutable variables
* using assignments
* control structures

The most common informal way to understand imperative programs is as instruction sequences for Von Neumann Computer

Scaling would be difficult since data structures are conceptualized word-by-word. we need Higher level Abstractions such as collections, polynomials, geometric shapes, strings, documents



**Theory**

Mathematically A theory consists of

* one or more data Types
* Operations on these types
* laws that describe relationship between values and operations

Normally a theory does not describe mutations

If we want to implement high level concepts following their mathematical theories , theres no place for mutations
  * the theories do not admit it
  * Mutation can destroy useful laws in theories
We should
  * concentrate on defining theories for operators expressed as functions
  * avoid mutations
  * have powerful ways to abstract and compose functions


**Functional programming Languages**

* In a restricted sense, a Functional Programming language is one which does not have mutable variables, assignments or imperative control structures
* In a wider sense , a functional programming language enables construction of elegant programs that focus on functions
* In particular functions in a FP language are first-class citizens , this means
  1. They can be defined anywhere, including other functions
  2. like any other value , they can be passed as parameters to functions and returned as results
  3. As for other values, there exists a set of operators to compose functions


  Functional Programming offers the following benifits.

  * Simpler reasoning principles
  * Better Modularity
  * Good for exploiting parallelism for multicore and cloud computing
**_Concurrency and Parallelism_**
  * Parallel Programming - Execute programs faster on parallel hardware

  * Concurrent Programming - Manage Concurrent execution threads explicitly

#### Elements of Programming

Every non-trivial programming language provides
* primitive expressions representing the simplest elements
* ways to combine expressions
* ways to abstract expressions, which introduce a name for an expression by which it can then be referred to

REPL - Read Eval Print Loop

**Defining Functions**
```scala
def square(x : Double) = x * x

```

```scala
def sumOfSquares(x: Double, y: Double) = square(x) + square(y)

```
A return type can be specified in Scala using a syntax like
```scala
def power(x: Double, y: Int): Double = x * x
```

call-by-name ==> function argument is not evaluated if the corresponding parameter is unused in evaluation of the function body

call-by-value ==> it evaluates every function argument only once.

Both strategies reduce to same final values as long as
* the reduced expression consists of pure functions
* both evaluations terminate


If Termination is not guaranteed

* If CBV evaluation of an expression e terminates, then CBN evaluation of e terminates , too.
* The other direction is not true.

Scala normally uses call-by-value
But if the type of a fucntion parameter starts with => it uses call-by-name
```scala
def constOne(x: Int, y: => Int) = 1
```

**Conditional Expressions**

To express choosing between two alternatives, Scala has a conditional expression if-else. It looks like a if-else in Java , but is used for expressions, not statements
```scala
def abs(x: Int) = if (x >= 0) x else -x
```
x>=0 is a predicate, of type Boolean.

**Value Definitions**
We have seen that  function parameters can be passed by value or be passed by Name. The same distinction applies to Definitions
The def form is "by_name" its righthand side is evaluated on each use.

There is also a val, which is by-value.

The right-hand side of a val definition is evaluated at the point of definition itself.

**Recursive Definitions**

Recursive functions need and explicit return type in Scala
For non-recursive functions, the return type is optional
