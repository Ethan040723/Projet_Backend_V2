module.exports = {

    /**
     * Retourne un IDAOArticle
     */
    getDaoArticle : () => {

        if (process.env.BDD_MODE === "sequelize") {
            const DAOArticleSequelize = require("./sequelize/daoarticle-sequelize");
            return new DAOArticleSequelize();
        }
        // MODE : Mongoose
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOArticleMongoose = require("./mongoose/daoarticle-mongoose");
            return new DAOArticleMongoose();
        }
        else if (process.env.BDD_MODE === "Mock") {
            const DaoarticleMock = require("./mock/daoarticle-mock");
            return new DaoarticleMock();
        }
    }
}