const Greet = (name = "there!") => {
    if (typeof name === "object") {
        let greeting = "Hello"
        name.forEach(greetee => {
            greeting += ", " + greetee;
        });
        return greeting;
    }
    else if (typeof(name) === "string" && name === name.toUpperCase()) {
        return "HELLO, " + name;
    }
    else {
        return "Hello, " + name;
    }
}

module.exports = Greet;