// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(n){
    let arr = [0,1];

    for (let i = 2; i <= n; i++){
        arr.push(arr[i - 2] + arr[i - 1]);
    }

    return arr[n];
}

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray){
    for (let i = 0; i < numArray.length - 1; i++){
        for (let j = 0; j < numArray.length - i - 1; j++){
            if (numArray[j] > numArray[j+1]){
                //swap
                let temp = numArray[j];
                numArray[j] = numArray[j+1];
                numArray[j + 1] = temp;
            }
        }
    }

    return numArray;
}


// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr){
    someStr = someStr.split("");
    someStr.reverse();
    someStr = someStr.join("");
    return someStr;
}

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum){
    if (someNum === 0){
        return 1;
    } else {
        return (someNum * factorial(someNum - 1));
    }
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset){

    if (typeof someStr !== 'string'){
        alert('Please enter a string for the first argument.');
        return;
    } 

    if(typeof length !== 'number'){
        alert('Please enter a number for the second argument.');
        return;
    }

    if(typeof offset !== 'number'){
        alert('Please enter a number for the third argument.');
        return;
    }

    return someStr.substring(offset, length + offset);
   
}


// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum){

    if(Number.isInteger(someNum / 2)){
        return true;
    } else {
        return false;
    }
    
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr){
    
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);