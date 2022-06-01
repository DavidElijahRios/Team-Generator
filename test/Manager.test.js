// TODO: need to write test for all Manager.js

const Manager = require('../lib/Manager.js')

describe("Manager", () => {
    test("Getting the correct name", () => {
        const test1 = new Manager("David", 25, "rios@rios.com", 619)

        expect(test1.getName()).toBe("David");
    })

    test("Getting office number", () => {
        const test1 = new Manager("David", 25, "rios@rios.com", 619)

        expect(test1.getOfficePhone()).toBe(619);
    })

    test("Getting the correct role", () => {
           const test1 = new Manager("David", 25, "rios@rios.com", 619)

           expect(test1.getRole()).toBe("Manager");
    })
})