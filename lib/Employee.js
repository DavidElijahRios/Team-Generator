// TODO: create Employee class that contain properties and methods below
// TODO: name, id, email, getName(), getId(), getEmail(), getRole() -returns 'Employee'

class Employee {
    constructor (name, id , email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName() {
        return this.name;

    }

    getId() {
        return this.id;

    }

    getEmail() {
        return this.email

    }

    getRole() {
        return 'Employee'
        
    }

}

// Need to make this Employee class accessible for other classes to extend it 
module.exports = Employee