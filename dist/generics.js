"use strict";
const score = [];
const names = []; // we see that arrays already make use of generics
function identityOne(val) {
    return val; // no idea of what type would be returned boolean or number
}
function identityTwo(val) {
    return val;
}
// solution using generics
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
