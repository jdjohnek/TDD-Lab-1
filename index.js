"use strict";

// const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", ];
// const vowels = ["a", "e", "i", "o", "u", ]

const pigLatin = (wordToBeTranslated) => {
    let firstLetter = wordToBeTranslated.charAt(0);
    wordToBeTranslated.toLowerCase();
    // const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", ];
    const vowels = ["a", "e", "i", "o", "u", ]


    if (vowels.includes(wordToBeTranslated.charAt(0))) {
        // if (wordToBeTranslated.charAt(0) === "a" || wordToBeTranslated.charAt(0) === "e" || wordToBeTranslated.charAt(0) === "i" || wordToBeTranslated.charAt(0) === "o" || wordToBeTranslated.charAt(0) === "u") {
        return wordToBeTranslated + "way";
    } else {
        while (!vowels.includes(wordToBeTranslated.charAt(0))) {
            let newWord = wordToBeTranslated.slice(0);
            wordToBeTranslated = newWord + firstLetter;

        }
        return wordToBeTranslated + "ay";
    }

}

module.exports = pigLatin;