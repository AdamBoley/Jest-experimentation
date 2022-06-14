
//This is the absolute simplest code that will pass the test, since the test expects a result of 42
//This is a somewhat trivial example
//Running npm test in the terminal will result in the test
/*function addition() {
    return 42
}
commented out for documentation purposes
*/

function addition(num1, num2) { //this is a slightly more complex verion of the addition function that will actually add two numbers dynamically and return the correct result
    //This function should actually pass any addition test
    return num1 + num2
}



module.exports = addition
//This is how a function is marked for export, so that it can be imported elsewhere
//In this case, the addition function will be exported to the companion test file

