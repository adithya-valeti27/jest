const multiply = require('./multiply');

test("multiply 10 and 27", ()=>{
    expect(multiply(10,27)).toBe(270)
})