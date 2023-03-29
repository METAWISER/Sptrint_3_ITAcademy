const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', ()=>{
  console.log("listener called");
})

//Raise an event
emitter.emit('messageLogged');


const salarios = [ 
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 1500
  }
]

const getSalary = ( id, callback) => {
  const salario = salarios.find(s=>s.id==id)?.salario;
  ( salario )
    ? callback(null, salario)
    : callback(`El salario con id: ${id} no existe`)
  
}

getSalary(1, (err, salario) => {
  if (err){
    return console.log(err);
  } 
  console.log(salario);
})