const Article = require("./article-model");
const IdaoArticle = require("../idaoarticle");

class DaoarticleMongoose extends IdaoArticle {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(article) {
        // Intancier l'objet
        const newArticle = new Article(article);
        // Save
        return await newArticle.save();
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return await Article.find();
    }

    async selectById(id) {
        return await Article.findOne({id : id});
    }

    async save(article) {
        return await article.save();
    }
    async delete(article) {
        return await article.deleteOne();
    }
}

module.exports = DaoarticleMongoose;