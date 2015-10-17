//TODO: Написать тут какой-нибудь код.
'use strict';

class Greeter {
    constructor(message) {
        this.greeting = message;
    }

    greet() {
        return this.greeting;
    }
}

let greeter = new Greeter('Hello, world'),
    button = document.createElement('button');

button.textContent = 'Say Hello';
button.onclick = () => console.log(greeter.greet());

document.body.appendChild(button);