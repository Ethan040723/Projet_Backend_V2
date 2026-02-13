const IdaoArticle = require("../IdaoArticle");

let Article = [
    { id: '1', title: 'Premier article', desc: 'Contenu du premier article', author: 'Isaac', imgPath: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg' },
    { id: '2', title: 'Deuxième article', desc: 'Contenu du deuxième article', author: 'Sanchez', imgPath: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg' },
    { id: '3', title: 'Troisième article', desc: 'Contenu du troisième article', author: 'Toto', imgPath: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg' }
];

class DaoarticleMock extends IdaoArticle {


    async insert(article) {
        Article.push(article);
        return await article;
    }

    async selectAll() {
        return await Article;
    }

    async selectById(id) {
        return Article.find(item => item.id === id);
    }

    async save(article) {
        const index = Article.findIndex(a => a.id === article.id);
        if (index !== -1) {
            Article[index] = article;
        } else {
            Article.push(article);
        }
        return article;
    }

    async delete(id) {
        const index = Article.findIndex(a => a.id === id);
        console.log(index);
        if (index !== undefined) {
            Article.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = DaoarticleMock;