const pigLatin = require("./index")
const { expect, test } = require("@jest/globals")

describe('Pig Latin function', () => {
    test('Words starting with different vowels', () => {
        expect(pigLatin("apple")).toEqual("appleway")
    })
    test('Words starting with different vowels', () => {
        expect(pigLatin("edge")).toEqual("edgeway")
    })
    test('Words starting with different vowels', () => {
        expect(pigLatin("interest")).toEqual("interestway")
    })
    test('Words starting with different vowels', () => {
        expect(pigLatin("odd")).toEqual("oddway")
    })
    test('Words starting with different vowels', () => {
        expect(pigLatin("under")).toEqual("underway")
    })
    test("Words starting with a consonant", () => {
        expect(pigLatin('giraffe')).toEqual('iraffegay')
    })
    test("Words starting with two consonants", () => {
        expect(pigLatin('black')).toEqual('ackblay')
    })
    test("Words starting with three consonants", () => {
        expect(pigLatin('screw')).toEqual('ewscray')
    })
    test("Checking uppercase converting to lowercase", () => {
        expect(pigLatin("Apple")).toEqual("appleway")
    })
})