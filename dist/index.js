"use strict";
// // valid javscript to create a class
// class User {
//     constructor(email, name){
//         this.email = email;
//         this.name = name
//     }
// }
// class User {
//     public email: string
//     name: string
//     city: string = ""
//     private readonly country: string = "Nigeria" //with this i can use the variable only within this class
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
//using modifiers instead: production ready code
// public and private access modifiers: they decide how much access i have to a property or method
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Lagos State";
    }
    // private method
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
// inheritance would require all the properties of the parent class, but will not require the private properties of the class
// but with the protected keyword, it is now accessible to the inherited classes
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User("hitesh@h.com", "hitesh");
