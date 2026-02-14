const express = require('express')
const router = express.Router()
const ArticleService = require('../service/service-article');

router.get("/articles", async (request, response) => {

    const serviceResponse = await ArticleService.getAllArticle();

    return response.json(serviceResponse);
});

router.get("/articles/:id", async (request, response) => {
    const id = request.params.id;
    const serviceReponse = await ArticleService.getArticleByID(id)
    return response.json(serviceReponse);
})

router.post("/articles/save", async (request, response) => {
    console.log(request.body);
    const serviceResponse = await ArticleService.createArticle(request.body);


    return response.json(serviceResponse);
});

router.delete("/articles/:id", async (request, response) => {
    const id = request.params.id;
    const serviceReponse = await ArticleService.DeleteArticle(id)
    return response.json(serviceResponse);
})


module.exports = router