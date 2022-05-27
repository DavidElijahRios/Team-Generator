// TODO: will inherit Employee's properties but will also include the following below
// TODO: officeNumber, getRole()-overridden to return 'Manager'

const Employee = require("./Employee");

// need to import Employee.js 



class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    // Needs to be a overidden method?
  getOfficePhone() { 
    return this.officeNumber
  }

    getRole() {
        return 'Manager'

    }

}

module.exports = Manager