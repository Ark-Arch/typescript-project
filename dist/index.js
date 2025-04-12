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
const hitesh = new User("hitesh@h.com", "hitesh");
