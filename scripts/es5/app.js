//TODO: Написать тут какой-нибудь код.
'use strict';

function Greeter(message) {
    this.greeting = message;
}

Greeter.prototype.greet = function () {
    return this.greeting;
};

var greeter = new Greeter('Hello, world'),
    button = document.createElement('button');

button.textContent = 'Say Hello';
button.onclick = function () {
    console.log(greeter.greet());
};

document.body.appendChild(button);