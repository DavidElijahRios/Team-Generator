// TODO: need to write test for all Engineer.js

const Engineer = require('../lib/Engineer.js')

describe("Engineer", () => {

    test("getting the correct name", () => {
        const test = new Engineer("David", 25, "rios@rios.com", "DavidElijahRios")

        expect(test.getName()).toBe("David");
    })

    test("getting github account name", () => {
        const test = new Engineer("David", 25, "rios@rios.com", "DavidElijahRios")

        expect(test.getGithub()).toBe("DavidElijahRios");
    })

    test("getting role", () => {
        const test = new Engineer("David", 25, "rios@rios.com", "DavidElijahRios")

        expect(test.getRole()).toBe('Engineer')
    })

})