/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function(sentence) {
    // Your code here
    let words = sentence.split(' ');

    let longest = 0;
    let str = '';

    words.forEach(ele => {
        if (ele.length > longest) {

            longest = ele.length;
            str = ele;
        }
    });
    return str;


    // return words.reduce((prev, curr) => {
    //     let longest = prev;
    //     if (prev.length < curr.length) {
    //         longest = curr;
    //     }
    //     return longest;
    // })

};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
