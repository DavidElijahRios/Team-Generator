// TODO: need to write test for all Employee.js
const Employee = require('../lib/Employee.js')

describe("Employee", () => {
     test("Getting the correct name", () => {
         const test1 = new Employee("David", 25, "rios@rios.com")
        
         expect(test1.getName()).toBe("David");
     })

     test("Getting the correct Id", () => {
        const test1 = new Employee("David", 25, "rios@rios.com")
       
        expect(test1.getId()).toBe(25);
    })

    test("Getting the correct email", () => {
        const test1 = new Employee("David", 25, "rios@rios.com")
       
        expect(test1.getEmail()).toBe("rios@rios.com");
    })

    test("Getting the correct Role", () => {
        const test1 = new Employee("David", 25, "rios@rios.com")
       
        expect(test1.getRole()).toBe("Employee");
    })
})