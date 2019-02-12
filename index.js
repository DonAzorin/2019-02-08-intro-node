const cowsay = require('cowsay');
const intro = require('./intro');
const nudo = require('./nudo.js');
const desenlace = require('./desenlace.js');

const lugar = Math.floor(Math.random() * 3);
const edad = Math.floor(Math.random() * 100);
const familia = Math.floor(Math.random() * 3);
const clima = Math.floor(Math.random() * 3);
const blanco = Math.floor(Math.random() * 3);
const respuesta = Math.floor(Math.random() * 3);
const lugaramor = Math.floor(Math.random() * 3);
const muerte = Math.floor(Math.random() * 3);


const vacaHablando = "Y es por eso que siempre debes de llevar cambio, men";

let historia = "Que tal, mi nombre es " + prota + ". Anoche una vaca parlante me dijo " + vacaHablando + " y me sentí de la patada...";

console.log(intro.historia(lugar, edad familia, clima, blanco, respuesta, lugaramor, muerte));
console.log(nudo.historia(lugar, edad familia, clima, blanco, respuesta, lugaramor, muerte))
console.log(desenlace.historia(lugar, edad familia, clima, blanco, respuesta, lugaramor, muerte))

console.log(cowsay.say({
    text: vacaHablando,
    e: "> <", 
    T: "U"
}));