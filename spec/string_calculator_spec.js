const {add} = require("../src/string_calculator");

describe("function should add numbers in a string and check if string contains a delimeter", function(){
    it("should check if string is empty", function(){
        expect(add("")).toEqual(0)
    })
    it("should check if string is equal to 1", function(){
        expect(add("1")).toEqual(1)
    })
    it("should check if string handles 2 integers", function(){
        expect(add("1,1")).toEqual(2)
    })
    it("should check if string handles multiple integers", function(){
        expect(add("1,2,3,4")).toEqual(10)
    })
    it("should check if string is equal to 6 with newline", function(){
        expect(add("1\n2,3")).toEqual(6)
    })
    it("should check if string is equal to 3 with semi-colon delimeter", function(){
        expect(add("//;\n1;2")).toEqual(3)
    })
    it("should check if string is equal to 3 with number delimeter", function(){
        expect(add("//4\n142")).toEqual(3)
    })
    it("should check if string is equal to 3 with number delimeter and return numbers less than 1000", function(){
        expect(add("//;\n1000;1;2")).toEqual(3)
    })
    it("should test if the string contains a negative and give an error if negative is found", function () {
        expect(function () {
        add("-1,-2,3,4");
    }).toThrow(new Error("negatives not allowed -1,-2"));
    });
    it("should check if string is equal to 6 with stars as delimeters", function(){
        expect(add("//***\n1***2***3")).toEqual(6)
    })
    it("should check if string is equal to 6 with multiple delimeters in square brackets", function(){
        expect(add("//[:D][%]\n1:D2%3")).toEqual(6)
    })
    it("should check if string is equal to 6 with multiple delimeters in square brackets", function(){
        expect(add("//[***][%%%]\n1***2%%%3")).toEqual(6)
    })
    it("should check if string is equal to 6 with multiple delimeters in square brackets", function(){
        expect(add("//[(-_-')][%]\n1(-_-')2%3")).toEqual(6)
    })
    it("should check if string is equal to 6 with multiple delimeters in square brackets", function(){
        expect(add("//[abc][777][:(]\n1abc27773:(1")).toEqual(7)
    })
    it("should test if the string contains valid input", function () {
        expect(function () {
        add("//;\n1000;1;2;");
    }).toThrow(new Error(`ERROR: invalid input`));
    });
    it("should test if the string contains valid input", function () {
        expect(function () {
        add("   //;\n1000,1;2");
    }).toThrow(new Error(`ERROR: invalid input`));
    });
    it("should test if the string contains valid input", function () {
        expect(function () {
        add("1,2,3//;\n1000,1;2");
    }).toThrow(new Error(`ERROR: invalid input`));
    });
})