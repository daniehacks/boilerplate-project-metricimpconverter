const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Input Assertions', function(){
        test('#wholeNumber, #decimalNumber', function(){
            aWholeNumber = Math.floor(Math.random() * 100) + 1;
            answer = convertHandler.getType(aWholeNumber);
            assertEqual(answer,"integer");
        });
    });
});
