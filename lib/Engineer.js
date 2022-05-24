// TODO: Will inherit Employee's properties but will also include the following below
// TODO: github, getGithub(), getRole()-overridden to return 'Engineer'

const Employee = require("./Employee");

// Need to import Employee.js



class Engineer extends Employee {
      constructor(name, id, email, github) {
          super(name, id, email)
          this.github = github
      }

      getGithub() {

      }


    //   Need to override method??
      getRole() {

      }

}