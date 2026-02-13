module.exports = {
    connect_sequelize: () => {
        // Se connecter à la base
        const sequelize = require('./database');

        sequelize.authenticate()
            .then(() => {
                console.log('Connexion MySQL OK')
                const Game = require('./article-model');
                sequelize.sync()
                    .then(() => console.log('Tables synchronisées'))
                    .catch(err => console.error(err))
            })
            .catch(err => console.error('Erreur MySQL', err))

    }
}