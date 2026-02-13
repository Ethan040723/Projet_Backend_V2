const articleservice = require("./service-article");



test ('selectArticle', async () => {
    const serviceResponse = await articleservice.getArticleByID("1")
    expect(serviceResponse.code).toBe('201');
})
test ('selectArticlefalse', async () => {
    const serviceResponse = await articleservice.getArticleByID("100")
    expect(serviceResponse.code).toBe('702');
})

test ('selectAllArticles', async () => {
    const serviceResponse = await articleservice.getAllArticle()
    expect(serviceResponse.code).toBe('200');
})
test ('créationArticle', async () => {
    let new_article = {title : "test", description : "test description", author : "test author" , imgPath : "test image"};
    const serviceResponse = await articleservice.createArticle(new_article);
    expect(serviceResponse.code).toBe('202');
})
test ('modificationArticle', async () => {
    let modifeArticle = {id : "1", title : "test", description : "test description", author : "test author"};
    const serviceResponse = await articleservice.createArticle(modifeArticle);
    expect(serviceResponse.code).toBe('203');
})
test ('suppressionArticle', async () => {
    const serviceResponse = await articleservice.DeleteArticle("1");
    expect(serviceResponse.code).toBe('204');
})
test ('suppresionArticleFalse', async () => {
    const serviceResponse = await articleservice.DeleteArticle("1000");
    expect(serviceResponse.code).toBe('702');
})
