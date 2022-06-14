/**
 * @jest-environment jsdom
 */
//This is a necessary addition due to changes in Jest's default configuration

const buttonClick = require('../button') //tests the button.js file, which interacts with the index.html file

beforeAll(() => { //beforeEach runs before each test. In this case, beforeEach will reset the p element with id of paragraph to be empty, since the button inserts text
    document.body.innerHTML = '<p id="paragraph"></p>'
})
//Jest's jsdom will create a simulated DOM for us, within which the tests will run

describe('DOM Tests', () => {
    test('expects p content to change', () => {
        buttonClick() //as part of the test, the buttonClick function is called
        expect(document.getElementById('paragraph').innerHTML).toEqual('You clicked the button')
        //A standard expect statement, this time finding the element with id of paragraph
        //Uses the .toEqual matcher to see if the designated element has that text content
        //.toEqual is similar to .toBe
    })
})