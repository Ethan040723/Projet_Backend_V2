require('dotenv').config();
const cors = require('cors');

const express = require('express');

// Initialiser l'application back
const app = express();
app.use(express.json());
app.use(cors());



if (process.env.BDD_MODE === "sequelize") {
    require("./dao/sequelize/connection.js").connect_sequelize();
    console.log("coucou");
}
else if (process.env.BDD_MODE === "mongodb") {
    require("./dao/mongoose/connection.js").connect_mongoose();

}

// Injecter route externe
// -- importer
const articleRoutes = require('./route/article-route')
// -- injecter dans le serveur
app.use(articleRoutes);

// Démarrer le serveur avec le port 3000
app.listen(3000, () => {
    console.log("Le serveur a démarré");
});