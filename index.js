const cowsay = require('cowsay');
const intro = require('./intro');
const nudo = require('./nudo.js');
const desenlace = require('./desenlace.js');

const lugar = Math.floor(Math.random() * 2);
const edad = Math.floor(Math.random() * 100);
const familia = Math.floor(Math.random() * 2);
const clima = Math.floor(Math.random() * 2);
const blanco = Math.floor(Math.random() * 2);
const respuesta = Math.floor(Math.random() * 2);
const lugaramor = Math.floor(Math.random() * 2);
const muerte = Math.floor(Math.random() * 2);


const vacaHablando = "Esta fue su anfitriona, la vaquita de las leyendas desándoles una buena noche";

//let historia = "Que tal, mi nombre es " + prota + ". Anoche una vaca parlante me dijo " + vacaHablando + " y me sentí de la patada...";

console.log(intro.historia(lugar, edad, familia, clima, blanco, respuesta));
console.log(nudo.historia(edad, clima,lugaramor))
console.log(desenlace.historia(muerte))

console.log(cowsay.say({
    text: vacaHablando,
    e: "O O", 
    T: "U"
}));