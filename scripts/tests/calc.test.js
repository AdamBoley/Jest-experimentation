




const addition = require('../calc') //this is how the companion calc.js file is imported for testing. Const is used to guard against it being overridden

describe('Calculator', () => { //this is the outermost parent. It will test one function, a calculator function. It contains several child tests
    describe('Addition function', () => { //this is function to test addition. It is properly referred to as a Test Suite
        test('Should return 42 for 20 + 22', () => { //this is a single test for the addition function
            expect(addition(20, 22)).toBe(42); //This is the actual test, since it is calling the addition function. toBe specifies the result
            //If the addition function returns 42, this test will pass
        })
        test('Should return 54 for 50 + 4', () => { //this is a second test for the addition function
            expect(addition(50, 4)).toBe(54)//this specifies different inputs and expected results. If the function returns 42, this test will fail
        })
        //These tests are basic, and do not fulfil the RITE acronym - a user could supply all manner of invalid inputs, so we need tests to check for that
        //We will also need to modify the function to pass these new tests
        test('should return NaN for no inputs', () => {
            expect(addition()).toBe(NaN) //tests for no inputs
        })
        test('should return NaN for a single input', () => {
            expect(addition(50)).toBe(NaN) //tests for a single input
        })
        test('should return "50donkey" for a number input and a string input', () => {
            expect(addition(50, 'donkey')).toBe('50donkey')
        })
    })

    describe('Subtraction function', () => { //this is function to test subtraction

    })

    describe('Multiplication function', () => { //this is function to test multiplication

    })

    describe('Division function', () => { //this is function to test division

    })
})