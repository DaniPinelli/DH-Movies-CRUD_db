module.exports = (sequelize, DataTypes) => {
    let alias ="Actor";

    let cols = {
        id: {
            type: DataTypes.INTEGER
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        
    }

    let config = {
        tableName: "actors",
        timestamps: false
    }

    let Actor = sequelize.define(alias, cols, config);

    Actor.associate = (models) => {
        Actor.belongsToMany(models.Pelicula, {
            as: "peliculas",
            though: "actor_movie",
            foreingKey: "actor_id"
            otherKey: "movie_id",
            timestamps: false
        });
    }

    return Actor;
} 
