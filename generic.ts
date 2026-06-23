function fruits10<T>(name:T):T{
    return name
}

function fruitsAny(name:any):any{
    return name
}

// let onlyFruit=fruitsAny("apple")
// let onlyNum=fruitsAny(100)
// let onlyBool =fruitsAny(true)

let onlyFruit=fruits10("apple")
let onlyNum=fruits10(100)
let onlyBool =fruits10(true)

function handleData<T>(value: T | undefined): T {
    if (value === undefined) {
        throw new Error("Value is missing!"); 
    }
    return value;
}

let userCollection = handleData([10,30,40])