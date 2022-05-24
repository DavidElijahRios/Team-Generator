// TODO: Will inherit Employee's properties but will also include the following below
// TODO: school, getSchool(), getRole()-overridden to return 'Intern'

const Employee = require("./Employee");

// Need to import Employee.js



class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {

    }


    // Need to override method??
    getRole() {

    }

}