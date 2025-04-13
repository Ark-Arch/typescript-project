const score: Array<number> = []
const names: Array<string> = [] // we see that arrays already make use of generics

function identityOne(val: boolean | number): boolean | number {
    return val // no idea of what type would be returned boolean or number
}

function identityTwo (val: any): any{
    return val
}

// solution using generics
function identityThree<Type>(val: Type): Type{ // this ensures that what 'Type is the input must be returned'
    return val
}


function identityFour<T>(val: T): T{
    return val
}

interface Bottle{
    brand: string,
    type: number
}

// with generics, i can reuse the function for specific types
identityFour<Bottle>({brand:'string', type:7})


// defining generics for arrays
function getSearchProductsTest<T>(products: T[]): T {
    return products[3] // understand that returning just a number would be wrong. so we index the array to return one of the elements of the array
}

function getSearchProducts<T>(products: T[]) : T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

// the below implements a generic function as an arrow function
// BY THE WAY: i should note that as a react developer, i want to put the comma in <T> to ensure that i do not confuse the tag to be a jsx tag
const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some databse operations
    const myIndex = 4
    return products[myIndex]
}