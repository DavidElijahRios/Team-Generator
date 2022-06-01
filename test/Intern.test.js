// TODO: need to write test for all Intern.js

const Intern = require('../lib/Intern.js')


describe("Intern", () => {

    test("getting the interns school", () => {
        const test = new Intern("David", 25, "rios@rios.com", "UCSD")

        expect(test.getSchool()).toBe("UCSD");
    })

    test("Getting role for team member", () => {
        const test = new Intern("David", 25, "rios@rios.com", "UCSD")

        expect(test.getRole()).toBe("Intern")
    })


})