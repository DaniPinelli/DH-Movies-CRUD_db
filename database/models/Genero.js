module.exports = (sequelize, DataTypes) => {
    let alias ="Genero";

    let cols = {
        id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName: "genres",
        timestamps: false
    }

    let Genero = sequelize.define(alias, cols, config);

    Genero.associate = (models) => {
        Genero,hasMany(models.Pelicula, {
            as: "peliculas",
            foreingKey: "genre_id"
        });
    }

    return Genero;
} 
