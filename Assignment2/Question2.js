// Capitalize string
function capitalize(str) {
    return str.toUpperCase();
}

// Reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Count vowels
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let ch of str) {
        if (vowels.includes(ch)) {
            count++;
        }
    }
    return count;
}

// Export functions
module.exports = {
    capitalize,
    reverseString,
    countVowels
};
