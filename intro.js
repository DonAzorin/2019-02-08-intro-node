module.exports = {
	historia: function(lugar, edad, familia, clima, blanco, respuesta) {
		if (lugar = 1) {
			lugar= 'la Nueva España'
		} else {
			lugar = 'una villa andaluza'
		}

		if (edad = 1) {
			edad = 'El joven'
		} else {
			edad = 'Don'
		}
		
		if (familia = 1) {
			familia = 'la opinión de sus padres'
		} else {
			familia = 'su matrimonio'
		}
		
		if (clima = 1) {
			clima = 'noche'
		} else {
			clima = 'tarde'
		}
		
		if (blanco = 1) {
			blanco = 'la nieve fría'
		} else {
			blanco = 'el mármol frío'
		}
		
		if (respuesta = 1) {
			respuesta = 'dulcemente'
		} else {
			respuesta = 'sin emoción alguna'
		}
		return `Ya nadie se acuerda cuándo pasó... Pero si saben que fue en ${lugar}. ${edad} Javier era apuesto y libre, con un corazón dispuesto a albergar los sentimientos de varias doncellas, sin importarle ${familia}.

		En una ${clima}, ${edad} Javier tuvo un sueño maravilloso: soñaba con sus amores y que los tenía en sus brazos. Luego vio entrar a una jovencita de piel blanca, más que ${blanco}. ${edad} Javier le preguntó dulcemente: ¿Por dónde has entrado mi amor, cómo has entrado mi vida? Si las puertas y ventanas están cerradas. A lo que ella respondió ${respuesta}: No soy el amor, amante. Soy la muerte que Dios te envía.`
	}
}

