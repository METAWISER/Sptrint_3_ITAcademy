const EventEmitter = require("events");

class Observer extends EventEmitter {
  constructor(eventName){
    super()
    this.eventName = eventName
    this.on(eventName, (user, message) => {
      console.log(`
=======================================
      Alerta Nuevo Mensaje
=======================================
      `);
      console.log(`[${new Date().toLocaleString()}]-> ${user}: ${message}`);
    }); 
  }

  subscribe(user){
    this.on(this.eventName, () => {user.notify();});
  }
  
  newMessageEmitter(user, message){
   
    this.emit(
      this.eventName,
      user.name,
      message 
    );
  }

}

class Topic  {
  constructor(name, observer) {
    this.observer = observer
    this.name = name;
    this.users = [];
    
  }

  subscribe(u) {
    this.users.push(u);
    this.observer.subscribe(u)
  }

  unsubscribe(user) {
    this.users = this.users.filter((u) => u != user);
  }

  newMessage(user, message) {
     try {
      const userExist = this.users.find(u => u === user)
      if (!userExist ) throw new Error('user not subscribed')
      this.users.filter(u => u != user)
      this.observer.newMessageEmitter(user, message)
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



const observer = new Observer('newMessage')

const topic = new Topic("Math", observer);

const user1 = new User("Carlos");
const user2 = new User("Danny");
const user3 = new User("Jose");

topic.subscribe(user1);
topic.subscribe(user2);
topic.subscribe(user3);

topic.newMessage(user3, "hola");
topic.newMessage(user2, "mundo");
topic.newMessage(user1, "mates");



 