module.exports = {
    historia: function(muerte) {
        if (muerte = 1) {
			muerte= 'sonriente'
		} else {
			muerte = 'fría'
        } 
        
		return `Pero se rompió el cordón de seda y ahí se acercaba la muerte y le dijo ${muerte}: vamos, enamorado. Ya se cumplió tu hora.`
    }
}