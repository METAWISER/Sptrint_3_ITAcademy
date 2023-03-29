const EventEmitter = require("events");

class Topic extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
    this.users = [];
    this.on("newMessage", () => {
      console.log(`
=======================================
       Alerta Nuevo Mensaje
=======================================
      `);
    });
  }

  subscribe(u) {
    this.users.push(u);
    this.on("newMessage", (date, user, message) => {
      console.log(`[${date.toLocaleString()}]-> ${user}: ${message}`);
      u.notify();
    });
  }

  unsubscribe(user) {
    this.users = this.users.filter((u) => u != user);
  }

  newMessage(user, message) {
    try {
      this.emit(
        "newMessage",
        new Date(),
        this.users.find((u) => u === user)?.name,
        message
      );
    } catch (error) {
      console.log(error);
    }
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
  notify() {
    console.log(`User ${this.name} has been notified`);
  }
}

const topic = new Topic("Math");

const user1 = new User("Carlos");
const user2 = new User("Danny");
const user3 = new User("Jose");

topic.subscribe(user1);
topic.subscribe(user2);
topic.subscribe(user3);

topic.newMessage(user3, "hola");
topic.newMessage(user2, "mundo");
topic.newMessage(user1, "mates");
user1.notify();
