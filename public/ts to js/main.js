let namee;
let user;
class Orbit {
    constructor(name, surname) {
        this.user = name;
        this.userother = surname;
    }
    showName() {
        let output;
        output = this.user + " helped me fuck a dinosour !!!";
        return output;
    }
    showValue() {
        let value = false;
        if (this.user === 'Matthew') {
            value = true;
        }
        else {
            value = false;
        }
        return value;
    }
}
let ultra = new Orbit('Ultrafy', 'Martin');
ultra.showValue();
