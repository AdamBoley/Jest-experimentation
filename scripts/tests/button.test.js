/**
 * @jest-environment jsdom
 */
//This is a necessary addition due to changes in Jest's default configuration

const buttonClick = require('../button') //tests the button.js file, which interacts with the index.html file

beforeAll(() => { //beforeEach runs before each test. In this case, beforeEach will reset the p element with id of paragraph to be empty, since the button inserts text
    //document.body.innerHTML = '<p id="paragraph"></p>'
    //The above works for testing single blocks of HTML
    //However, it becomes unwieldy if we want to test more than 1 DOM components
    let fs = require('fs') //This is a Node file handling module. It allows us to open and read files
    let fileContents = fs.readFileSync('index.html', 'utf-8') //this opens the contents of the index.html file and stores it as a variable
    //Node runs from the root directory, so we don't need to specify a file path - index.html is in the root directory
    document.open()
    document.write(fileContents)
    document.close()
    //these 3 commands are the recommended method of opening a file - open the file, write the contents and then close it
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
    test('h1 should exist', () => {
        expect(document.getElementsByTagName('h1').length).toBe(1) //a second test, that creates an array of all elements that have a tag name of h1.
        //we expect the length of that array to be 1, since there is only 1 h1 element in the index.html file
    })
})

// exoect must be preceeded by a test