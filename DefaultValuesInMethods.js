function sayHello(name, greeting) {
    console.log(`${greeting} ${name}`)
}

sayHello("Aileen","Hello");

//
function sayHello(name, greeting = "Hello") {
    console.log(`${greeting} ${name}`)
}
sayHello("Aileen");

//
function sayHello(name, greeting = "Hello") {
    console.log(`${greeting} ${name}`)
}
sayHello("Aileen","How are you?");   // this overrides whatever is set as a default in the function argument