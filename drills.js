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