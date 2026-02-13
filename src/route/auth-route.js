const express = require('express')
const router = express.Router()
const UserService = require('../service/service-user');


router.get('/users', async (request, response) => {
    const serviceResponse = await UserService.getAllUSers();

    return response.json(serviceResponse);
})

router.get("/users/:id", async (request, response) => {
    const id = request.params.id;
    const serviceReponse = await UserService.getUser(id)
    return response.json(serviceReponse);
})

router.post('/connexion', async (request, response) => {
    const login = request.body;
    const serviceReponse = await UserService.login(login);
    return response.json(serviceReponse);
})

router.post('/inscription', async (request, response) => {
    const inscr = request.body;
    const serviceReponse = await UserService.inscription(inscr)
    return response.json(serviceReponse);
})

module.exports = router