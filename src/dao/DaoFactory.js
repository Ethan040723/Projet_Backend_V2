const DaoarticleMock = require("./mock/daoarticle-mock");
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
        // Fallback
        const DaoarticleMock = require("./mock/daoarticle-mock");
        return new DaoarticleMock();
    },

    getDaoUser : () =>{
        if (process.env.BDD_MODE === "sequelize") {
            const DAOUserSequelize = require("./sequelize/daouser-sequelize");
            return new DAOUserSequelize();
        }
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOUserMongoose = require("./mongoose/daouser-mongoose");
            return new DAOUserMongoose();
        }
        else if (process.env.BDD_MODE === "Mock") {
            const DaouserMock = require("./mock/daouser-mock");
            return new DaouserMock();
        }
    }
}