const diff = require('./diff');

test("diff of 27 and 10 be 17",()=>{
    expect(diff(27,10)).toBe(17)
})