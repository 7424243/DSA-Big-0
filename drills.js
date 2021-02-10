/*====== 1. What is the Big O for this? =======*/
/*1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"*/

//Answer: Constant time O(1) - selecting one item from the array

/*2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.
*/

//Answer: Linear time O(n) - looping through the entire array

/* ====== 2. Even or odd ======= 
What is the Big O of the following algorithm? Explain your answer.
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
*/

//Answer: Constant time O(1) - no matter the size of the value, you will either get a modular of 0 or not immediately.

/* ======= 3. Are you here? =======
What is the Big O of the following algorithm? Explain your answer.
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
*/

//Answer: Polynomial time O(n^k) - nested loops with linear iterations

/* ======= 4. Doubler =======
What is the Big O of the following algorithm? Explain your answer.
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
*/

//Answer: Linear time O(n) - grows linearly based on the length of the array

/* ======= 5. Naive Search ========
What is the Big O of the following algorithm? Explain your answer.
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
*/

//Answer: Linear time O(n) - depends on the number of elements in the array

/* ======= 6. Creating pairs =======
What is the Big O of the following algorithm? Explain your answer.
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
*/

//Answer: Polynomial time O(n^k) - nested loops 

/* ======== 7. Compute the sequence ========
What does the following algorithm do? What is its runtime complexity? Explain your answer.
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
*/

//Answer: This algorithm creates the Fibionacci sequence up the the num provided. The first iteration, pushes 0 into results array, the second iteration pushes 1 into the results array, and then the remaining iterations complete the fibionacci sequence until num is reached.
//Linear time O(n) - time complexity grows in relationship directly to the num input.

/* ======= 8. An efficient search ========
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer.
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
*/

//Answer: Logarithmic time O(log(n)) - each time through the while loop, the problem gets smaller which SLOWLY increases time complexity.

/* ======== 9. Random element =======
What is the Big O of the following algorithm? Explain your answer.
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
*/

//Answer: Constant time O(1) - it returns a random value of an array once.

/* ======= 10. Who Am I? =======
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
*/

//Answer: The algorithm checks if a number is a prime number. Linear time O(n) - time complexity grows proportionatly with size of n.

/* ======= 11. Tower of Hanoi =======
Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
If you are given 5 disks, how do the rods look like after 7 recursive calls?
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
What is the runtime of your algorithm?
*/

/* s, d, e represent three rods. n is the number of discs initially in s */

const towerOfHanoi = function(s, d, e, n) {
    if(n <= 0) {
        return
    }
    towerOfHanoi(s, e, d, n - 1)
    console.log(`Move Disk-${n} FROM ${s} TO ${d}`)
    towerOfHanoi(e, d, s, n - 1)
}

//after 7 recursive calls with 5 disks...discs 1, 4, 5 are on rod s and disks 1, 2, 3 are on rod D.
//31 moves needed to complete the puzzle with 5 disks. 15 moves needed to complete the puzzle with 4 disks. 7 moves needed to complete the puzzles with 3 disks.
//Exponential time O(2^n) - run times grow rapidly with a small increase in input size.

/* ======== 12. Iterative Version / 13. Recursive Big O / 14. Iterative Big O ======== 
12. Iterative version
Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.
13. Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.
14. Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.
*/

//1. Counting Sheep
function countingSheep(number) {
    for (let i = number; i > 0; i--) {
        console.log(`${i}: Another sheep jumps over the fence`) 
    }
    console.log(`All sheep jumped over the fence`) 
}
//Recursive Time Complexity: Linear time O(n) - run time is directly proportional to the size of number
//Iterative Time Complexity: Linear time O(n) - run time is directly proportional to the size of number

//2. Power Calculator
function powerCalculator(baseInt, exponentInt) {
    if(exponentInt === 0) {
        return 1
    }
    if(exponentInt < 0) {
        return 'Exponent should be >= 0'
    }
    let result = 1
    for(let i = 0; i < exponentInt; i++) {
        result = result * baseInt
    }
    return result
}
//Recursive Time Complexity: Linear time O(n) - run time is directly proportional to the size of number
//Iterative Time Complexity: Linear time O(n) - run time is directly proportional to the size of number

//3. Reverse String
function reverseString(string) {
    let newString = ''
    for(let i = string.length-1; i >= 0; i--) {
        newString = newString + string.charAt(i)
    }
    return newString
}
//Recursive Time Complexity: Linear time O(n) - run time is directly proportional to the length of string
//Iterative Time Complexity: Linear time O(n) - run time is directly proportional to the length of string

//4. nth Triangular Number
function triangularNumber(number) {
    let result = 0
    for(let i = 1; i <= number; i++) {
        result = result + i
    }
    return result
}
//Recursive Time Complexity: Linear time O(n) - run time is directly proportional to the number
//Iterative Time Complexity: Linear time O(n) - run time is directly proportional to the number

//5. String Splitter
function stringSplitter(string, separator) {
    let results = []
    while(string.length > 0) {
        let index = string.indexOf(separator)
        if(index == -1) break
        results.push(string.slice(0, index))
        string = string.slice(index + separator.length)
    }
    results.push(string)
    return results
}
//Recursive Time Complexity: Linear time O(n) - run time is directly proportional to the length of string
//Iterative Time Complexity: Linear time O(n) - run time is directly proportional to the length of string

//6. Fibonacci
function fibonacci(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
//Recursive Time Complexity: Linear time O(n) - run time is directly proportional to num
//Iterative Time Complexity: Linear time O(n) - run time is directly proportional to num

//7. Factorial
function factorial(number) {
    let results = 1
    for(let i = number; i > 1; i--) {
        results = results * i
    }
    return results
}
//Recursive Time Complexity: Linear time O(n) - run time is directly proportional to number
//Iterative Time Complexity: Linear time O(n) - run time is directly proportional to number

//8. A way out of the maze
//Recursive Time Complexity: Linear time O(n) - run time is directly proportional to the size of the maze

//9. All ways out of the maze
//Recursive Time Complexity: Linear time O(n) - run time is directly proportional to the size of the maze

//10. Anagrams
//Recursive Time Complexity: Logarithmic time O(log(n)) - run time increases slowly the larger the string

//11. Organization Chart
//Recursive Time Complexity: Polynomial time O(n^k) - because of the nested situation, run time grows quicker than input

//12. Binary Representation
//Recursive Time Complexity: Exponential time O(2^n) - becaues run times grows much more rapidly than the input