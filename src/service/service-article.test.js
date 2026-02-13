const articleservice = require("./service-article");

test ('selectArticle', () => {
    const serviceResponse = articleservice.getArticleByID(1)
    console.log(serviceResponse);
    expect(serviceResponse.code).toBe('200');
})
test ('selectArticlefalse', () => {
    const serviceResponse = articleservice.getArticleByID(100)
    expect(serviceResponse.code).toBe('700');
})