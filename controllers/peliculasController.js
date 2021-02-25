let db = require('../database/models');

let peliculasController = {
    crear: function (req, res) {
        db.Genero.findAll()
            .then(function (generos) {
                return res.render('creacionPeliculas', {
                    generos: generos
                });
            })
    },
    guardado: function (req, res) {
        db.Pelicula.create({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating
        });

        res.redirect('/peliculas');
    }
}

module.exports = peliculasController;