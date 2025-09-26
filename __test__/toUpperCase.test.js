//the method to be tested
function myStringTest (str){

    return str.toUpperCase();
}



//jest unit test
describe("Test to transfer a string to upper case", () => {
    
    //tested case
    test("Transfer to upper case", () =>{
        const myString = "a";
        const expOutput = "A";

        expect(myStringTest(myString)).toBe(expOutput);
    });

});