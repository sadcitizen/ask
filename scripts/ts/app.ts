//TODO: Написать тут какой-нибудь код.
class Greeter<T> {
    greeting:T;

    constructor(message:T) {
        this.greeting = message;
    }

    greet() {
        return this.greeting;
    }
}

var greeter = new Greeter<string>('Hello, world'),
    button = document.createElement('button');

button.textContent = 'Say Hello';
button.onclick = () => console.log(greeter.greet());

document.body.appendChild(button);
