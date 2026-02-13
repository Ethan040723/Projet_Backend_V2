const Article = require("./article-model");
const IdaoArticle = require("../idaoarticle");

class DAOArticleSequelize extends IdaoArticle {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(article) {
        return await Article.create(article);
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return await Article.findAll();
    }

    async selectById(id) {
        return await Article.findByPk(id)
    }
    async save(article) {
        return await article.save();
    }
    async delete(article) {
        return await article.destroy();
    }
}

module.exports = DAOArticleSequelize;