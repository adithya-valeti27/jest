const shop = require('./shop');

test("check if the list contains milk ",()=>{
    expect(shop).toContain("milk")
})