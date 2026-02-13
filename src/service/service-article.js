const DAOFactory = require("../dao/daoFactory");
const {makeService} = require("./service-helper");
const {v4 :uuidv4} = require("uuid");


module.exports = {


    getAllArticle : async () => {
        // Select all
        const toutMesArticles = await DAOFactory.getDaoArticle().selectAll();

        if (toutMesArticles === undefined) {
            return makeService("700", "Liste introuvables", null);
        }

        return makeService("200", "Liste récupérer", toutMesArticles);
    },

    getArticleByID : async (param) => {
        const article = await DAOFactory.getDaoArticle().selectById(param);
        if (article === undefined) {
            return makeService("702", "article introubvable", null)
        }
        return makeService("201", "Article trouvé" , article);
    },

    createArticle : async (new_article) => {
        let articletrouve = null;
        const generate_id = uuidv4();

        if (new_article.id !== undefined) {
            articletrouve =await DAOFactory.getDaoArticle().selectById(new_article.id);
            console.log(articletrouve);
        }

        if(articletrouve){
            articletrouve.title = new_article.title;
            articletrouve.desc = new_article.desc;
            articletrouve.author = new_article.author;
            articletrouve.imgPath = new_article.imgPath;

            console.log(articletrouve);

            await DAOFactory.getDaoArticle().save(articletrouve);

            return makeService("203", "Article modifié avbec succés", new_article);

        }

        let article = {id: generate_id, title:new_article.title, desc:new_article.desc, author: new_article.desc, imgPath:new_article.imgPath};

        const NewArticle = await DAOFactory.getDaoArticle().insert(article);

        return makeService("202", "Article crée avec succès", NewArticle);
    },

    DeleteArticle : async (id) => {
      let findArticle = await DAOFactory.getDaoArticle().selectById(id);
      if (findArticle === null || findArticle === undefined) {
          return makeService("702" , "article introuvable", null)
      }
      else {
          await DAOFactory.getDaoArticle().delete(findArticle);
          return makeService("204", "article supprimé avec succès", findArticle);
      }
    }
}