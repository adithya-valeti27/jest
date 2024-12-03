const personList = require('./names');

test("check if adithya is present in the object list",()=>{
    expect(personList).toContain("adhi")
})