# mern-training-apr-2020
Thruskills MERN stack training Apr 2020

## Day 18

Since props are read only
What if we want to change the data ?


Children - special prop
    <IconButton>Do something</IconButton>

PropTypes
    import -  PropTypes from 'prop-types'
    propType property in the component

        IconButton.propTypes = {
            children: PropTypes.string.isRequired
        }


Props
    Passing props
    Receiving props
    Destruc
    Can we modify props
    
    Pure function??
        
        function add(a,b){
            return a+b;
        }

        1. this function is not trying to change any of its imputs
        2. it will always return the same result for the same input

    Impure

        function withdraw(account, amount){
            account.total -= amount;
        }



## Day 17
    create-react-app app-name
        - it will create a new react project with name your provide
        - the project will also create the directory and files required, it its a node based project 
        
        - public
            index.html
            *.css
            *.jpg/ *.png
            favicon.ico ?? 
            ...
        - src
            App.css
            App.js
            index.css
            index.js
            ... 
        - package.json
        - README.md

        npm start (this will start the project by default in port 3000)
        index.js -> 


        Components
            App
                Nav
                    NavItem
                        Can we pass some values to NAvItem ??



## Day 16
React
    1. JS library to build front end
    2. Its based on components

    Single page applications? 
        We will create a single entry point
        And the page gets loaded into the browser once
        And depending on the user interactions, we refresh the page or the part of the page
        We do not have to reload the page
        example - gmail

    Mobile apps
        React + React Native (Hybrid)
            1. Native Apps (Android - Java/Kotlin, iOS - Swift)
            2. Hybrif Apps - JavaScript (React Native)

    Create your first react app
    ---------------------------
    npx create-react-app my-first-app
    cd my-first-app
    npm start
    localhost:3000 (by default it will lauch the browser)
    
    npm - is used to install the node modules
    npx - ??


## Day 15
ES6
    Function expression --> method definition
    OOP
        es6 - constructor functions
        Class - class

        Subclassing or the inheritance

        Error / exception handling works


        lets think about working with exception handling this way
        try{
            // write code which can potentially throw some exception
            ....
            ...
        }catch{
            //
            catch your exception
            // handle it here
            or you can throw from here
        }

        // anywhere you use api that throws some exception
        // read from file and file does not exist I/O 
        
    Maps 
        an object is like a map
        {
            key: value,
            key1: value1
        }

        an object essentially is like an map

## Day 14

ES6 - ECMAScript 6 - ECMA ?
    Official name for ES6 is ECMAScript 2015

    ES5 - HTML5 (2009)

    What ES6?
    Why do we need?
    Core features
    
    OOPS
    ----
    Classes
    Inheritance
    Modules

    2020
        The basic JS expectation anyone has in the market is of ES6
    
    variable
    data types 
        string - we have new ways to handle
    operators
    conditional 
    looping
    events
    funtions - arrow function
    objects
        classes
        inheritance
    modules

    Goal of ES6
        be a better language
        improve interoperation
        versioning
    
    Features
        Syntax
        functionality
        new features
    
    let - kind of replacement for var
    const - only if the value doesn't change

    Hi! My name is 'name' and I live in 'city';
    Hi! My name is Manohar and I live in Bangalore.
    

## Day 13
AJAX
    XMLHttpRequest
    Fetch
    jQuery (third party library) -- it's very much in use in lot of places

AJAX Examples
    1. create the project detail page - fetch the project detail from the API
    2. Implement delte project method

## Day 12
    DOM
    FETCH

DOM ?
Document Object Model
HTML in your page
    <html>
        <head>
            <title>Some DOM specific text</title>

    it creates a structure (data structure) 
        read the elements 
        modify its values/attributes
        move them
        delete

    Parent-child kind of relationship ??
    Data structures??
        Tree
        Arrays
        Map
        Stack
        Queue
        List
        Graph

    Tree data structure
        traverse easily

    Structure your pages correctly

    Tree
        (elements) - Node
    HTML - root
        HEAD
        BODY
            #text:
            DIV
                #text:
                IMG
                    #text:
                P
                    #text:
        #text:

    DOM API's

    window
    navigator
    document

    document. ??
    
    document.getElementById()       - get element by id 
    document.querySelector()        - selectors (tag, class name, id), it will get the first matching
    document.querySelectorAll()     - it will fetch all the matching elements

## Day 11
Different type of web API's
    DOM
    Fetching data (Ajax)
    Third party API's
        Google maps
        Google analytics
        Youtube videos
    Draphics
    Video & Audio
    Client side storage
        LocalStorage

Client side API's
    Browser 

Server side
    ?? 

Object properties
    Enumerable
    Configurable
    Writeable
Inversion of Control (ioc)

## Day 10
Object Prototypes

JSON
    JavaScript Object Notation
    
    JSON is a data exchange/interchange format

    {
        "key": value
    }

    // JSON OBJECT
    {
        "name":"manohar",
        "age": 35
    }

    // JSON ARRAY
    [
        {
            "name":"ankit",
            "class":"js"
        },{
            "name":"madhuri",
            "class":"js"
        },{
            "name":"aisha",
            "class":"js"
        }
    ]

    // js object to json string
    JSON.stringify(object);

    // creating js object from json string
    JSON.parse(jsonString);


## Day 9
    Objects
        Basics of OOP
        Constructors
        Instances
        Ways to create objects
        Prototypes
        Inheritance
    
    Programing paradigms

    OOP languages
        Real world entities are mapped with classes
        bottom up
            Java
            C++
    
    Structured language
        Code runs from top to bottom
        top down approach
            C

    Scripting languages
        Python
        JavaScript

    Characteristics of OOP
        P   -   Polymorphism (Multiple forms - methds, objects)
        I   -   Inheritance (Parent child kind of hierarchy oof classes & objects)
        E   -   Encapsulatioon (Putting the related data and methods together)

    Person
        name
        dob
        address

        Student
            Attributes
                rollNumber
                branch
                college
            Methods
                attendClass()
                readBooks()
                submitAssignments()
                writeExam()
        Teacher
            Attributes
                employeeId
                branch
                college
            Methods
                attendClass()
                readBooks()
                submitAssignments()
                writeExam()

    Animal
       Attributes
            color
            breed
            type
            weight
            height
            age
        Methods
            eat()
            speak()
            walk()
            run()
            fly()
            swim()
            sleep()

    Animal - Genric 
        Dog - Specialized
            bark()  
        Cat

    
    

## Day 8

    Events
        Event object
        Default event handle
        Prevent the default event handler
        Models for event handling
            Capture
            Bubble
    First mini project
        Number guessing game

    Objects
        ...
        ...
        ...

    Event object
        every event handler function can use the parameter
        
        function handleEvent(e){

        }
        the moment browser triggers the event, it will attach the event object to it
    
        The 16 divs example - where on click of the div we change its background color

    Bubling and capturing
        # slightly advance topic
        # you may expect a few question on this during interrviews

        Event bubbling

            <div class="outer">
                <div class="inner">
                    <p></p>
                </div>
            </div>

            Once an event is triggered for the inner elements it gets propogated to its parents
            Propogatino happens from child to parent

            If you do not want to propogate the events further, you can use below method
                event.stopPropagation(); // for the inner element
    
    Number guessing game
        1. System will generate a random number in the range of 1 - 100
        2. You got 10 chances to guess the number
        3. If you guess the correct number, show a "congratulations message"
        4. If you guess the wrong number, show a hint "ligh or low"
        5. Also display the numbers you have guessed in all the attempts
        6. Reset project
            1. remove previous attempts 
            2. re generate the random number
            3. reinitialize the counter = 0
            4. also have to hide the message (sucess or eror)
            5. remove the reset button
            6. focus on the input box

    Object
        What is an object?
        function ( X )
        data structure
        data type - composite data type
        it can contain multiple values
            number
            string
        
        // OOP
        Class = It represnets a real world entity example, Person, Car, City
        Objects = object is an instance of a class, example Manohar, abcd, Bangalore

        Till JS ES6 (there was no notion of classes) all we had was object/s

## Day 7
    1. Function
        Built-in browser Function
        Function versus methods
        Custom Function
        Invoking Function
        Anonymous Function
        Function parameters
            Call by value
            Call by reference
        Scope of the variable 
            1. Global scope (window)
                var x;
            2. Function scope
                function add(){
                    // function scope
                }
            3. Block level scope
                function oddeven(number){
                    var rem = number % 2;
                    if(rem == 0){
                        // define a variable in block level scope
                        let even = true;
                    }
                    return even;
                }
        Function inside a function

        trim
        charAt
        toString

        console.log()
        document document.querySelector('h1')
        alert()

        methods???

        function : reusable piece of code which does somoe specific task

        var a;
        var b;
        var sum = a + b;
        var sq = sum * sum;


        ....
        ...

        var a;
        var b;
        var sum = a+b;
        var sq = sum * sum;

        // basic syntax of a function
        function addSquare(a, b){
            return (a + b) * (a + b);
        }

        var x;
        var y;
        var sum = addSquare(x,y);

        var p;
        var q;
        var sum = addSquare(p,q);

        // functions
        1. repetitive task is wrapped inside a function
        2. reuable piece of code
        3. code will be more maintanable

        // function is the keyword
        // add is the name of the function
        // number1 and number2 .... ???

        function add(number1, number2){
            // inside the function body
            var sum = number1 + number2;
            return sum;
        } 
        // generate a random number 

        function random(){
            return Math.random()
        }

        1. Call by value
        2. Call by reference

        Paramters - function declaration
        Arguments - function invocation

        Function inside a function
        1. you can always call a function fromo otherr function.... 
        2. you can define a function inside a function 

    2. Event

    3 ways to handle the events
        1. event handler properties
            btn.onclick
        2. inline event handler
            <button id="btn" onclick="changeBg();">
        3. Add/Remove Event Listners
            btn.addEventListner('click', handleClick)
            

    // 
    var array = [];

    array.push(20);
    // push - is a function/ method (Array class)

    alert()
    console.log() // method

## Day  6

    1. Conditional statements
        - if, else, nested if else
        - switch
        - ternery operator
    2. Looping statement
        for
        while
        do while

// block
{
    // a block of code
    var i = 20;

    ...
    ..
}

if (condition){
    // true - this block run
}


if (condition){
    // true - this block runs
}else{
    // false - this block of code will run
}

// 1-7

1 = monday
2 = tuesday
...
...

// Nested if else
var day;
if(day == 1){
    console.log('Monday is here')
}else if(day == 3){
    console.log('Wednesday')
}else if(day == 5){
    console.log('Friday')
}else{
    console.log('some other day')
}

## switch
condition
multiple cases - outcomes of the condition

var day;
switch(day){
    // expression may return number, string, boolean
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
         console.log('Sunday')
        break;
    default:
        console.log('Invalid day')
}   

## Loops
run some staments again and again based on certain conditions - looping

for - standard for loop
for(initializer; exit condition; final expression){
    // block of code that runs
}

while ()
// initializer
var i=0;
while(exit condition){
    // while block

    final expression
}


do{
    console.log('hi')
} while(exit condition)

break;
continue;

## Day 5
Today's agenda

    1. Operators
    2. Create a web page and include JS (client side JS)
        2.1. multiple ways to include js in a web page
        2.2. placeholder for javascript
            head
            body 
            both --- very often
        2.3. order in which javascript is loaded
            main.js
            main1.js

    Operators
    ### Ternary operator
        (experssion) ? val1 : val2;
    
    ### comma 

    ### unary

        delete
        typeof
        void

    ### Relational
        instanceof
    
    ### precedence


## Day 4
Todays agenda
    1. Arrays
    2. Operators
    

    ### Array
    A collection of elements. Elements can be of any type

    var numbers = [1,1,2,3,5,8];

    ### operators

    operands
    operators

    var x;

    var y = 20;

    y -> operand
    = -> operator (assignment operator)

    types of operators
        - based on the number of operands they work with
         unary operators
         binary
         ternary
    
    precedence of operators

    1 + 3 + 3 * 4 / 3 = ? based on the operator precendence

    Assignment operators
    =   

    a = a + 5; // a += 5; // -=, *=, /= 

    &   - ??
    &&  - ??

    Comparison operators
    ==      equals to
    ===     strict equal
    != 
    !== 

    Arithmetic operator
    +, -, *, /, %
    ++ increment
    -- decrement
        post increment/decrement
        pre increment/dcrement

    1. swap two number without using a third variable?
        var a = 10;
        var b = 20;
        var tmp = a; // temp or third variable
        a = b;
        b= tmp;

        // how many ways are there to solve the above problem?
        // which will the most efficient one?

    Bitwise Operators
        &   AND     if both the bits are 1 = output will be 1
        |   OR      if any bit is 1 = output will be 1
        ^   XOR     if different = output will be 1 (caret)
        ~   NOT     negation  0 to 1 and 1  tp 0    (tilde)

        a = 3 = 011
        b = 4 = 100
        ---------------
            AND 000 0
            OR  111 7
            ^   111 7
        ----------------
        ~a = 011 -> 100 = -4

        a << 1; 011 << 1; => 110 = 6
        a >> 1; 011 >> 1; => 001 = 1


    Logical operators
        AND     &&  if both the experssions return true - true
        OR      ||  if any expression returns true - true
        NOT     !   oppostive of the expression

    String concatenation
        + plus

## Day 3
Recap -
    statement
    variable declaration
        var 
        let     - es6
        const   - es6 
    variable naming rules
    best practices around naming your variables
    keywords / reserved words in JS

Data types?
    1. the data  type of a variable is determined by the value it holds
    2. you dont have to specify a data type while declaring variables

Dynamically typed language ?? 
types?? data type?

    1. primitive
        1. string
        2. number
        3. boolean

    2. composite
        1. array
        2. object

    3. special data types
        1. null
        2. undefined

String
    " " double quotes => string literal value
    ' ' single quotes => string literal value
    ` ` back ticks => 
    
    which one to use and why ?
    single quote vs double quote?
    
    Hi! I'm Manohar.

    var intro = "Hi! I'm Manohar."      // double quotes is what i will recommend
    var intro = 'Hi! I\'m Manohar.";    // or use the escape character

    var x = 'I think it\'s going to "rain" today';

    var freeText = "this is some sample text";
    
    // as a recommendation - use single quotes

    // Hindi/ Kanadda/ Tamil / chinese 


    var name = 'manohar';
    var str = `My name is ${name}`;

    toUpperCase
    toLowerCase
    indexOf
    lastIndexOf
    charAt
    trim

Number
    int
    float

    number system ?? 
    Base    Range           Name
    10      0 - 9           decial number system - this is the default number system
    8       0 - 7           octal
    16      0 - 9, a - f    hexa decimal
    2       0 - 1           binary

    // decimal is the default
    var i = 10;

    var i = 010; // octal value

    var i = 0x10; // hexadecimal

Boolean
    var x = true;
    var y = false;

    // booleans with string +     


undefined

null

Array
    an array is a collection of homogenous data types // similar
    

##Today we will learn some more git commands

- ```git branch``` 						- shows current branch and list of all local branches
- ```git checkout <branch-name>```		- switch to another branch
- ```git checkout -b <brranch-name>```	- create a new branch and switch to that
- ```git merge <branch-name>```			- merge the branch into the current branch
