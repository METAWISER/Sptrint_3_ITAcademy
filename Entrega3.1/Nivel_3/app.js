const EventEmitter = require('events')

console.clear()

class User extends EventEmitter {
  constructor(name) {
    this.name = name
  }
}

class Topic extends EventEmitter {
  constructor(name) {
    this.name = name
    this.users = []
  }

  subscribe(user) {
    this.users.push(user)
    return user, 'has suscribed'
  }

  unsubscribe(user) {
    this.users = this.users.filter(u => u != user)
    return user, 'has unsubscribe'
  }

  sendMessage() {
    message.on('message', (date, topic, nombre, mensaje) => {
      console.log(`[${date.toString}]`);
    })
  }
}