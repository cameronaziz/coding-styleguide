# TypeScript Style Guide

This is the TypeScript style guide that we use internally at dv01. It It's important that we keep a consistent look/feel of our code.


## Table of Contents

  1. [Introduction](#introduction)
  2. [Files](#files)
  3. [Indentation](#indentation)
  4. [Line Length](#line-length)
  5. [Quotes](#quotes)
  6. [Commas](#commas)
  7. [Comments](#comments)
  8. [Class](#class)
  9. [Inline](#inline)
  10. [Todo and XXX](#todo-and-xxx)
  11. [Variable Declarations](#variable-declarations)
  12. [Function Declarations](#function-declarations)
  13. [Anonymous Functions](#anonymous-functions)
  14. [Names](#names)
  15. [Variables, Modules, and Functions](#variables-modules-and-functions)
  16. [Use of var, let, and const](#use-of-var-let-and-const)
  17. [Types](#types)
  18. [Classes](#classes)
  19. [Interfaces](#interfaces)
  20. [Constants](#constants)
  21. [Statements](#statements)
  22. [Simple](#simple)
  23. [Compound](#compound)
  24. [Return](#return)
  25. [If](#if)
  26. [For](#for)
  27. [While](#while)
  28. [Do While](#do-while)
  29. [Switch](#switch)
  30. [Try](#try)
  31. [Continue](#continue)
  32. [Throw](#throw)
  33. [Iterators](#iterators)
  34. [Whitespace](#whitespace)
  35. [Object and Array Literals](#object-and-array-literals)
  36. [Destructuring](#destructuring)
  37. [Assignment Expressions](#assignment-expressions)
  38. [=== and !== Operators](#-and--operators)
  39. [Promises and Async/Await](#promises-and-async-await)
  40. [Typings](#assignment-expressions)
  41. [External](#external)
  42. [Internal](#internal)
  43. [Eval](#eval)
  44. [TSLint](#tslint)
  45. [Prettier](#prettier)
  46. [Helper Files](#project-helper-files)

## Files
  - All TypeScript files must have a ".ts" or ".tsx" extension.
  - They should be all lower case, and only include letters, numbers, and underscores. Try to avoid numbers.
  ```
  // bad
  file1Name.ts

  // okay
  file_1_name.ts

  // good
  file_one_name.ts
  ```
  - **All files should end in a new line.** This is necessary for some Unix systems.

**[top](#table-of-contents)**

## Indentation
  - The unit of indentation is two spaces.
  - **Never use tabs**, as this can lead to trouble when opening files in different IDEs/Text editors. Most text editors have a configuration option to change tabs to spaces.
  - Functions should be indented to the indentation of the declaration
  ```typescript
  // bad
  const CSVView: React.FunctionComponent<CSVViewProps> =
  ({ csvMap, tableHeight, unmatchedColumns, unmatchedFields, matchedColumns }) => (
  doSomething(csvMap)
  )

  // bad
  const CSVView: React.FunctionComponent<CSVViewProps> =
  ({ csvMap, tableHeight, unmatchedColumns, unmatchedFields, matchedColumns }) => (
    doSomething(csvMap)
  )

  // good
  const CSVView: React.FunctionComponent<CSVViewProps> =
    ({ csvMap, tableHeight, unmatchedColumns, unmatchedFields, matchedColumns }) => (
      doSomething(csvMap)
  )

  // good
  const CSVView: React.FunctionComponent<CSVViewProps> =
    ({ csvMap, tableHeight, unmatchedColumns, unmatchedFields, matchedColumns }) => (
      doSomething(csvMap)
    )
  ```

**[top](#table-of-contents)**

## Line Length
  - Lines must not be longer than 120 characters.

**[top](#table-of-contents)**

## Quotes
  - Use single-quotes `''` for all strings, and use double-quotes `""` for strings within strings. All React props should be double quoted.
  - When you need to use an apostrophe inside a string it is recommended to use double-quotes.
  - Use template literals only when using expression interplation `${}`
  - Do not chain strings, use template literals.

  ```typescript
  // bad
  let greeting = "Hello World!";

  // good
  let greeting = 'Hello World!';

  // bad
  let phrase = "It's Friday!";

  // good
  let phrase = 'It\'s Friday!';

  // bad
  let html = "<div class='bold'>Hello World</div>";

  // bad
  let html = '<div class=\'bold\'>Hello World</div>';

  // good
  let html = '<div class="bold">Hello World</div>';

  // bad
  let template = `string text string text`;

  // good
  let template = `string text ${expression} string text`;

  // bad
  <Component title='My Title'>

  // bad
  <Component title={'My Title'}>

  // bad
  <Component title={`My Title`}>

  // bad
  <Component title={'My ' + titleVar}>

  // good
  <Component title="My Title">

  // good
  <Component title={`My ${titleVar}`}>
  ```

**[top](#table-of-contents)**

## Commas
  - DO NOT USE trailing commas. DO NOT USE leading commas.

  ```typescript
  // bad
  const person = {
      firstName: 'John'
    , lastname: 'Smith'
    , email: 'john.smith@outlook.com'
  }

  // bad
  const person = {
      firstName: 'John',
      lastname: 'Smith',
      email: 'john.smith@outlook.com',
  }

  // good
  const person = {
      firstName: 'John',
      lastname: 'Smith',
      email: 'john.smith@outlook.com'
  }
  ```

**[top](#table-of-contents)**

## Comments
  - Comments are strongly encouraged. It is very useful to be able to read comments and understand the intentions of a given block of code.
  - Comments need to be clear, just like the code they are annotating.
  - Make sure your comments are meaningful.

The following example is a case where a comment is completely erroneous, and can actually make the code harder to read.

  ```typescript
  // Set index to zero.
  let index = 0;
  ```

  - All public functions should have a comment block `/**...*/` using [JSDoc](http://usejsdoc.org/) style comments.

JSDocs can be interpreted by IDEs for better intellisense. Below is an example of a JSDoc comment block for a function.

  ```typescript
  /**
   * Takes in a name and returns a greeting string.
   *
   * @param name The name of the greeted person.
   */
  function getGreeting(name: string): string {
      return `Hello ${name}!`
  }
  ```

### Class

  - All classes should have block comments `/**...*/` for all public variables and functions.
  - All public functions should use [JSDoc](http://usejsdoc.org/) style comments.
  - Functions need to should a comment explaining what the function does, and all of the input parameters should be annotated with `@param`.
  - The class should include a block comment containing the description of the class
  - The constructor should contain a JSDoc comment annotating any input parameters.

  ```typescript
  /**
   * Contains properties of a Person.
   */
  class Person {
      /**
       * Returns a new Person with the specified name.
       *
       * @param name The name of the new Person.
       */
      public static GetPerson(name: string): Person {
          return new Person(name)
      }

      /**
       * @param name The name of the new Person.
       */
      constructor(public name: string) { }

      /**
       * Instructs this Person to walk for a certain amount
       * of time.
       *
       * @param millis The number of milliseconds the Person
       * should walk.
       */
      public walkFor(millis: number): void {
          console.log(this.name + ' is now walking.')

          setTimeout(() => {
              console.log(this.name + ' has stopped walking.')
          }, millis)
      }
  }
  ```

**[top](#table-of-contents)**

### Inline

  - Inline comments are comments inside of complex statements (loops, functions, etc).
  - Use `//` for all inline comments.
  - Keep comments clear and concise.
  - Place inline comments on a newline above the line they are annotating
  - Put an empty line before the comment.

  ```typescript
  // bad
  let lines: Array<string> // Holds all the lines in the file.

  // good
  // Holds all the lines in the file.
  let lines: Array<string>

  // bad
  function walkFor(name: string, millis: number): void {
      console.log(name + ' is now walking.')
      // Wait for millis milliseconds to stop walking
      setTimeout(() => {
          console.log(name + ' has stopped walking.')
      }, millis)
  }

  // good
  function walkFor(name: string, millis: number): void {
      console.log(name + ' is now walking.')

      // Wait for millis milliseconds to stop walking
      setTimeout(() => {
          console.log(name + ' has stopped walking.')
      }, millis)
  }
  ```

**[top](#table-of-contents)**

### Todo and XXX

`TODO` and `XXX` annotations help you quickly find things that need to be fixed/implemented.

  - Use `// TODO-MYNAME:` to annotate solutions that need to be implemented.
  - Use your name so you can find your todos.
  - It is best to write code that doesn't need `TODO` and `XXX` annotations, but sometimes it is unavoidable.

**[top](#table-of-contents)**

## Variable Declarations

  - All variables must be declared prior to using them. This aids in code readability and helps prevent undeclared variables from being hoisted onto the global scope.

  ```typescript
  // bad
  console.log(a + b)

  let a = 2
  let b = 4

  // good
  let a = 2
  let b = 4

  console.log(a + b)
  ```

  - Implied global variables should never be used.
  - You should never define a variable on the global scope from within a smaller scope.
  - Never shadow varibles

  ```typescript
  // bad
  const a = 123
  const add = (a: number, b: number): number => {
    return a + b
  }

  // bad
  const b = 123
  const timesTen = (a: number): number => {
    const b = 10
    return a * b
  }

  // bad
  const b = 123
  const timesTen = (a: number): number => {
    b = 10
    return a * b
  }
  ```

  - Declare each variable on a newline.
  - Use `let` or `const` to declare each variable. Never use `var`. This can save you a lot of trouble when refactoring.

  ```typescript
  // bad
  let a = 2,
      b = 2,
      c = 4

  // bad
  // b will be defined on global scope.
  let a = b = 2, c = 4

  // good
  let a = 2
  let b = 2
  let c = 4
  ```

## Function Declarations

  - All functions must be declared before they are used.
  - Use arrow functions if binding of `this` is not needed.
  - Any closure functions should be defined right after the let declarations.

  ```typescript
  // bad
  function createGreeting(name: string): string {
      let message = 'Hello '

      return greet

      function greet() {
          return `${message}${name}!`
      }
  }

  // bad
  function createGreeting(name: string): string {
      let message = 'Hello '

      function greet() {
          return `${message}${name}!`
      }

      return greet
  }

  // bad
  const createGreeting = (name: string): string => {
      let message = 'Hello '

      return greet

      function greet() {
          return `${message}${name}!`
      }
  }

  // good
  const createGreeting = (name: string): string => {
      let message = 'Hello '

      const greet = () => {
          return `${message}${name}!`
      }

      return greet
  }

  // bad
  class MyClass {
    constructor() {
      this.logger = this.logger.bind(this)
    }

    logger() {
      this.setState({
        logged: true
      })
    }
  }

  // good
  class MyClass {
    logger = () => {
      this.setState({
        logged: true
      })
    }
  }

  // good
  class Person {
    constructor() {
      this.greeting = 'hello'
      this.boundSayGreeting = this.boundSayGreeting.bind(this)
    }

    sayGreeting() {
      console.log(this.greeting)
    }

    arrowSayGreeting = () => {
      console.log(this.greeting)
    }

    boundSayGreeting() {
      console.log(this.greeting)
    }
  }

  const person = new Person()

  const frenchie = {
    greeting: 'bonjour',
    sayGreeting: person.sayGreeting,
    arrowSayGreeting: person.arrowSayGreeting,
    boundSayGreeting: person.boundSayGreeting
  }

  frenchie.sayGreeting() // "bonjour"
  frenchie.arrowSayGreeting() // "hello"
  frenchie.boundSayGreeting() // "hello"

  const fooLog = () => {
    this.foo = 'foo'

    function logFunc() {
      console.log(this) // undefined
    }

    const logArrow = () => {
      console.log(this) // { foo: 'foo' }
    }

    function logBound() {
      console.log(this) // { foo: 'foo' }
    }
    logBound = logBound.bind(this)

    logFunc()
    logArrow()
    logBount()
  }

  fooLog()
  ```

  - There should be no space between the name of the function and the left parenthesis `(` of its parameter list.
  - There should be one space between the right parenthesis `)` and the left curly `{` brace that begins the statement body.

  ```typescript
  // bad
  function foo (){
    // ...
  }

  const foo=() => {
    // ...
  }

  // good
  function foo() {
    // ...
  }

  const foo = () => {
    // ...
  }
  ```

  - The body of the function should be indented 2 spaces.
  - The right curly brace `}` should be on a new line.
  - The right curly brace `}` should be aligned with the line containing the left curly brace `{` that begins the function statement.

  ```typescript
  // bad
  function foo(): string {
    return 'foo'}

  const foo = (): string => {
    return 'foo'}

  // good
  const foo = (): string => {
    return 'foo'
  }

  function foo(): string {
    return 'foo'
  }
  ```

  - For each function parameter
  - There should be no space between the parameter and the colon `:` indicating the type declaration.
  - There should be a space between the colon `:` and the type declaration.

  ```typescript
  // bad
  const greet = (name:string) => {
    // ...
  }

  function greet(name:string) {
    // ...
  }

  const greet = ({name, age}:Person) => {
    // ...
  }

  // good
  const greet = (name: string) => {
    // ...
  }

  function greet(name: string) {
    // ...
  }

  const greet = ({ name, age }: Person) => {
    // ...
  }
  ```

**[top](#table-of-contents)**

### Anonymous Functions

  - All anonymous functions should be defined as fat-arrow/lambda `() => { }` functions unless it is absolutely necessary to preserve the context in the function body.
  - All fat-arrow/lambda functions should have parenthesis `()` around the function parameters.

  ```typescript
  // bad
  clickAlert = () => {
      let element = document.querySelector('div');

      this.foo = 'foo'

      element.addEventListener('click', function(ev: Event) {
          // this.foo does not exist!
          alert(this.foo);
      })
  }

  // good
  clickAlert = () => {
      let element = document.querySelector('div');

      this.foo = 'foo'

      element.addEventListener('click', (ev: Event) => {
          // TypeScript allows this.foo to exist!
          alert(this.foo);
      })
  }
  ```

  - Always surround the function block with braces `{}`

  ```typescript
  // bad
  element.addEventListener('submit', ev => ev.preventDefault())

  // bad
  element.addEventListener('submit', (ev: Event) => ev.preventDefault())

  // good
  element.addEventListener('submit', (ev: Event) => {
      ev.preventDefault()
  })
  ```

  - There should be a space between the right parenthesis `)` and the `=>`
  - There should be a space between the `=>` and the left curly brace `{` that begins the statement body.

  ```typescript
  // bad
  element.addEventListener('click', (ev: Event)=>{alert('foo')})

  // good
  element.addEventListener('click', (ev: Event) => {
      alert('foo')
  })
  ```

  - The statement body should be indented 4 spaces.
  - The right curly brace `}` should be on a new line.
  - The right curly brace `}` should be aligned with the line containing the  left curly brace `{` that begins the function statement.

**[top](#table-of-contents)**

## Names

  - All variable and function names should be formed with alphanumeric pascal case `A-Z, a-z, 0-9`.
  - Constants should be uppercase with underscores. Constants are values that should never be changed throughout the application, such as URL strings or keys.

### Variables, Modules, and Functions

  - Variable, module, and function names should use lowerCamelCase.

### Use of var, let, and const

  - Use `const` where appropriate, for values that never change
  - Use `let` everywhere else
  - Avoid using `var`

  ```typescript
  // bad
  const MyVar = 'value'
  const my_var = 'value'
  const My_Constant = 'value'

  // good
  const myVar = 'value'
  const MY_CONSTANT = 'value'
  ```

**[top](#table-of-contents)**

### Types

  - Always favor type inference over explicit type declaration except for function return types
  - Always define the return type of functions. This can help catch errors as the functions evolve.
  - Types should be used whenever possible. **No implicit `any`**.
  - Arrays should be defined as `type[]` instead of `Array<type>` .
  - Use the `any` type sparingly, it is always better to define an interface. Your PR will likely be rejected if `any` type is used.

  ```typescript
  // bad
  let numbers = []

  // bad
  let numbers: Array<number> = []

  // good
  let numbers: number[] = []
  ```

**[top](#table-of-contents)**

### Classes

  - Classes/Constructors should use UpperCamelCase (PascalCase).
  - `Private` and `private static` members in classes should be denoted with the `private` keyword.
  - `Protected` members in classes do not use the `private` keyword.
  - Default to using `protected` for all instance members
  - Use `private` instance members sparingly
  - Use `public` instance members only when they are used by other parts of the application.

  ```typescript
  class Person {
      protected fullName: string;

      constructor(public firstName: string, public lastName: string) {
          this.fullName = `${firstName} ${lastName}`
      }

      public toString() {
          return this.fullName;
      }

      protected walkFor(millis: number) {
          console.log(`${this.fullName} is now walking.`)

          // Wait for millis milliseconds to stop walking
          setTimeout(() => {
              console.log(`${this.fullName} has stopped walking.`)
          }, millis)
      }
  }
  ```

**[top](#table-of-contents)**

### Interfaces

  - Interfaces should use UpperCamelCase.
  - Interfaces SHOULD NOT be prefaced with the capital letter I.
  - Interfaces properties SHOULD NOT end with a semicolon or comma. They are not objects.
  - Only `public` members should be in an interface, leave out `protected` and `private` members.

  ```typescript
  interface Person {
      firstName: string
      lastName: string
      toString(): string
  }
  ```

**[top](#table-of-contents)**

### Constants

  - All constants you be defined with the `const` keyword.

**[top](#table-of-contents)**

## Statements

### Simple

  - Each line should contain at most one statement.
  - A semicolon **should not** placed at the end of every simple statement.
  - Semicolons should only be used when absolutely needed, such as `for-loops`

  ```typescript
  // bad
  let greeting = 'Hello World';

  alert(greeting);

  // bad
  let greeting = 'Hello World'; alert(greeting);

  // bad
  let greeting = 'Hello World' alert(greeting)

  // good
  let greeting = 'Hello World'

  alert(greeting)
  ```

**[top](#table-of-contents)**

### Compound

Compound statements are statements containing lists of statements enclosed in curly braces `{}`.

  - The enclosed statements should start on a newline.
  - The enclosed statements should be indented 2 spaces.

  ```typescript
  // bad
  if (condition === true) { alert('Passed!') }

  // good
  if (condition === true) {
      alert('Passed!')
  }
  ```
  - The left curly brace `{` should be at the end of the line that begins the compound statement.
  - The right curly brace `}` should begin a line and be indented to align with the line containing the left curly brace `{`.

  ```typescript
  // bad
  if (condition === true)
  {
      alert('Passed!')
  }

  // good
  if (condition === true) {
      alert('Passed!')
  }
  ```

  - **Braces `{}` must be used around all compound statements** even if they are only single-line statements.

  ```typescript
  // bad
  if (condition === true) alert('Passed!')

  // bad
  if (condition === true)
      alert('Passed!')

  // good
  if (condition === true) {
      alert('Passed!')
  }
  ```

If you do not add braces `{}` around compound statements, it makes it very easy to accidentally introduce bugs.

  ```typescript
  if (condition === true)
      alert('Passed!')
      return condition
  ```

It appears the intention of the above code is to return if `condition === true`, but without braces `{}` the return statement will be executed regardless of the condition.

**[top](#table-of-contents)**

### Return

  - If a `return` statement has a value you should not use parenthesis `()` around the value, unless it is returning JSX.
  - The return value expression must start on the same line as the `return` keyword.

  ```typescript
  // bad
  return
      'Hello World!'

  // bad
  return ('Hello World!')

  // good
  return 'Hello World!'

  // good
  return (
    <div>
      hello
    </div>
  )
  ```

  - It is recommended to take a return-first approach whenever possible.

  ```typescript
  // bad
  const getHighestNumber = (a: number, b: number): number => {
      let out = b

      if(a >= b) {
          out = a
      }

      return out
  }

  // good
  const getHighestNumber = (a: number, b: number): number => {
      if(a >= b) {
          return a
      }

      return b
  }
  ```

  - Always **explicitly define a return type**. This can help TypeScript validate that you are always returning something that matches the correct type.

  ```typescript
  // bad
  const getPerson = (name: string) => {
      return new Person(name)
  }

  // good
  const getPerson = (name: string): Person => {
      return new Person(name)
  }
  ```

**[top](#table-of-contents)**

### If

  - Alway be explicit in your `if` statement conditions.

  ```typescript
  // bad
  const isString = (str: any) => {
      return !!str
  }

  // good
  const isString = (str: any): str is string => {
      return typeof str === 'string'
  }
  ```

Sometimes simply checking falsy/truthy values is fine, but the general approach is to be explicit with what you are looking for. This can prevent a lot of unncessary bugs.

If statements should take the following form:

  ```typescript
  if (/* condition */) {
      // ...
  }

  if (/* condition */) {
      // ...
  } else {
      // ...
  }

  if (/* condition */) {
      // ...
  } else if (/* condition */) {
      // ...
  } else {
      // ...
  }
  ```

**[top](#table-of-contents)**

### For

For statements should have the following form:

  ```typescript
  for(/* initialization */; /* condition */; /* update */) {
      // ...
  }

  let keys = Object.keys(/* object */);
  let length = keys.length;

  for(let i = 0; i < length; i += 1) {
      // ...
  }
  ```

Object.prototype.keys is supported in `ie >= 9`.

  - Use Object.prototype.keys in lieu of a `for...in` statement.

With TypeScript you can use `for...of` statements:

  ```typescript
  let arr = [2, 3, 4];

  for (const value of arr) {
      // ...
  }
  ```

**[top](#table-of-contents)**

### While

While statements should have the following form:

  ```typescript
  while (/* condition */) {
      // ...
  }
  ```

**[top](#table-of-contents)**

### Do While

  - Do while statements should be avoided unless absolutely necessary to maintain consistency.

Do while statements should have to following form:

  ```typescript
  do {
      // ...
  } while (/* condition */)
  ```

**[top](#table-of-contents)**

### Switch

Switch statements should have the following form:

  ```typescript
  switch (/* expression */) {
      case /* expression */:
          // ...
          /* termination */
      default:
          // ...
  }
  ```

  - Each switch group except default should end with `break`, `return`, or `throw`.
  - Switch statements should be used over many if statements evaluating the same variable.

**[top](#table-of-contents)**

### Try

  - Try statements should be used when using `async/await` syntax.
  - Try statements should not be used in synchronous code. They are not a good way of providing flow control.

Try statements should have the following form:

  ```typescript
  try {
      // ...
  } catch (error: Error) {
      // ...
  }

  try {
      // ...
  } catch (error: Error) {
      // ...
  } finally {
      // ...
  }
  ```

**[top](#table-of-contents)**

### Continue

  - It is recommended to take a continue-first approach in all loops.

**[top](#table-of-contents)**

### Throw

  - Avoid the use of the throw statement unless absolutely necessary.

**[top](#table-of-contents)**

## Whitespace

Blank lines improve code readability by allowing the developer to logically group code blocks. Blank spaces should be used in the following circumstances.

  - A keyword followed by left parenthesis `(` should be separated by 1 space.

  ```typescript
  // bad
  if(condition) {
      // ...
  }

  // good
  if (condition) {
      // ...
  }
  ```

  - All operators except for period `.`, left parenthesis `(`, and left bracket `[` should be separated from their operands by a space.

  ```typescript
  // bad
  let sum = a+b

  // good
  let sum = a + b

  // bad
  let name = person . name

  // good
  let name = person.name

  // bad
  let item = items [4]

  // good
  let item = items[4]
  ```

  - No space should separate a unary/incremental operator `!x, -x, +x, ~x, ++x, --x` and its operand.

  ```typescript
  // bad
  let neg = - a

  // good
  let neg = -a
  ```

  - Each semicolon `;` in the control part of a `for` statement should be followed with a space.

  ```typescript
  // bad
  for(let i = 0;i < 10; i += 1) {
      // ...
  }

  // good
  for(let i = 0; i < 10; i += 1) {
      // ...
  }
  ```

**[top](#table-of-contents)**

## Iterators

Don't use iterators whenever it's possible to use higher-order functions.

  ```typescript
  // bad
  const numbers = [1, 2, 3]
  let sum = 0

  for (let num of numbers) {
      sum += num
  }

  // good
  const numbers = [1, 2, 3]
  const sum = numbers.reduce((prev, current) => {
      return prev + current
  }, 0)

  // bad
  const number = [1, 2, 3]
  const add1 = []
  for (let i = 0; i < numbers.length; i += 1) {
    add1.push(numbers[i] + 1)
  }

  // good
  const number = [1, 2, 3]
  const add1 = numbers.map((num) => {
      return num + 1
  })
  ```

**[top](#table-of-contents)**

## Object and Array Literals

  - Use curly braces `{}` instead of `new Object()`.
  - Use brackets `[]` instead of `new Array()`.

**[top](#table-of-contents)**

## Destructuring

  - Use Object destructuring always.
  - Use Array destructuring except when returning

  ```typescript
  // bad
  function toName(user) {
      const firstName = user.firstName
      const lastName = user.lastName
      const email = user.email

      if (isEmpty(lastName)) {
          if (isEmpty(firstName)) {
              return email
          }

          return firstName
      }

      return `${firstName} ${lastName}`
  }

  // good
  function toName({ firstName, lastName, email }) {
      if (isEmpty(lastName)) {
          if (isEmpty(firstName)) {
              return email
          }

          return firstName
      }

      return `${firstName} ${lastName}`
  }

  const arr = [1, 2, 3, 4]

  // bad
  const first = arr[0]
  const second = arr[1]

  // good
  const [first, second] = arr


  const obj = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4
  }

  // bad
  const first = obj.first
  const second = obj.second

  // good
  const { first, second } = obj
  ```

**[top](#table-of-contents)**

## Assignment Expressions

  - Assignment expressions inside of the condition block of `if`, `while`, and `do while` statements should be avoided.

  ```typescript
  // bad
  while (node = node.next) {
      // ...
  }

  // good
  while (typeof node === 'object') {
      node = node.next;

      // ...
  }
  ```

**[top](#table-of-contents)**

## === and !== Operators

  - It is better to use `===` and `!==` operators whenever possible.
  - `==` and `!=` operators do type coercion, which can lead to headaches when debugging code.

**[top](#table-of-contents)**

## Promises and Async/Await

  - Always use `async/await` wherever possible. Avoid using `Promise.then` and `Promise.catch`.

  ```typescript
  // bad
  function reddits(): Promise<reddit.Listing> {
      return fetch('https://www.reddit.com/r/all.json')
          .then((response) => {
              return response.json()
          })
          .then((result) => {
              return result.data
          })
          .catch((error) => {
              console.log(error)

              return {
                  kind: 'Listing',
                  data: {
                      children: []
                  }
              }
          })
  }

  // good
  async function reddits(): Promise<reddit.Listing> {
      try {
          const response = await fetch('https://www.reddit.com/r/all.json')

          return response.json()
      } catch(error) {
          console.log(error)

          return {
              kind: 'Listing',
              data: {
                  children: []
              }
          }
      }
  }
  ```

**[top](#table-of-contents)**

## Typings

### External

  - Typings are sometimes packaged with node modules, in this case you don't need to do anything
  - Use `@types` for all external library declarations not included in `node_modules`
  - Actively add/update/contribute typings when they are missing

### Internal

  - Create declaration files `.d.ts` for your interfaces instead of putting them in your `.ts` files
  - Let the TypeScript compiler infer as much as possible
  - Avoid defining types when it is unnecessary

  ```typescript
  // bad
  let a: number = 2

  // good
  let a = 2

  // bad
  let b
  b = {
    name: 'Steve',
    age: 22
  }

  // good
  let b: Person
  b = {
    name: 'Steve',
    age: 22
  }
  ```

  - Always define the return type of functions, this helps to make sure that functions always return the correct type

  ```typescript
  // bad
  const sum = (a: number, b: number) => {
      return a + b
  }

  // good
  const sum = (a: number, b: number): number => {
      return a + b
  }
  ```

**[top](#table-of-contents)**

## Eval

  - **Never use eval**
  - **Never use the Function constructor**
  - **Never pass strings to `setTimeout` or `setInterval`**

**[top](#table-of-contents)**

## TSLint

  - Always use a Linter

Linting your code is very helpful for preventing minor issues that can escape the eye during development. We use TSLint (written by Palantir) for our linter.

  - TSLint: https://github.com/palantir/tslint
  - Our [tslint.json](https://github.com/Platypi/style_typescript/blob/master/tslint.json)
  - Use `tslint-microsoft-contrib` (included in our tslint.json)

**[top](#table-of-contents)**

## Prettier

  - Always use a formatter

Formatting your code is very helpful for readability. When working in teams, it is nice to be able to look at code that is in the same format across the entire application.

  - Prettier: https://github.com/prettier/prettier

**[top](#table-of-contents)**

## Project Helper Files
We have provided a [package.json](https://github.com/Platypi/style_typescript/blob/master/package.json) that can serve has a starter for a TypeScript project. It has the following things:

  - TypeScript
    - `typescript` is listed as a dependency... obviously!
    - 3 `tsconfig.json` files are included, one for a node server, one for client files, and one to use with text editors like VSCode or Atom
    - The `tsconfig.json` files are configured with rules that closely match the rules defined in this guide.
  - TSLint
    - `tslint` and `tslint-microsoft-contrib` are listed as devDependencies
    - a `lint` script that you can use in your projects with `npm run lint`
  - Prettier
    - `prettier` is listed as a devDependency
    - a `prettier.config.js` file has some rule for prettier that closely match the rules defined in this guide.
    - a `format` script is included that you can modify to suit your needs. It will call on prettier to format all the TypeScript files in the `src` directory by default.

**[top](#table-of-contents)**
