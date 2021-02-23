module.exports = (sequelize, DataTypes) => {
    let alias ="Pelicula";

    let cols = {
        id: {
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING
        },
        awards: {
            type: DataTypes.INTEGER
        },
        rating: {
            type: DataTypes.DOUBLE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE
        }
    }

    let config = {
        tableName: "movies",
        timestamps: false
    }

    let Pelicula = sequelize.define(alias, cols, config);

    Pelicula.associate = (models) => {
        Genero,belongs(models.Genero, {
            as: "genero",
            foreingKey: "genre_id"
        });
        Pelicula.belongsToMany(models.Actor, {
            as: "actores",
            though: "actor_movie",
            foreingKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        });
    }

    return Pelicula;
} 
