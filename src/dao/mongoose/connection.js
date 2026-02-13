const mongoose = require("mongoose");
require('dotenv').config();
module.exports = {
    connect_mongoose : () =>  {
        // ----------------------------------------------------------
// * MongoDB
// ----------------------------------------------------------
        const mongoose = require('mongoose');

// Si connexion reussie
        mongoose.connection.once('open', () => {
            console.log(`Connecté(e) à la base de données`);
        });

// Si erreur bdd
        mongoose.connection.on('error', (err) => {
            console.log(`Erreur de la base données`);
        });

// Enclencher à la connexion
        console.log(process.env.BDD_CONNECTION);
        mongoose.connect(process.env.BDD_CONNECTION);
    }
}