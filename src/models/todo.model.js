const {v4:uuid} = require("uuid");

class Todo {
    #id;
    #name;
    #description;
    constructor(name, description) {
        this.#id = uuid();
        this.#name = name;
        this.#description = description;
    }
}