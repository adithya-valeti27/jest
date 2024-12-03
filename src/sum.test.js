const sum = require('./sum');

test("sum of 10, 27 to be 37",()=>{
    expect(sum(10,27)).toBe(37)
})