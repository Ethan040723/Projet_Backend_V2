const DAOFactory = require("../dao/daoFactory");
const {makeService, makeError} = require("./service-helper");
const {v4 :uuidv4} = require("uuid");
const jwt = require('jsonwebtoken');

const jwtSecretKey = "UKVWI42";

module.exports = {


    getAllUSers: async () => {
        // Select all
        const toutMesUsers = await DAOFactory.getDaoUser().getAllUsers()

        if (toutMesUsers === undefined) {
            return makeError("700", "Liste introuvables", null);
        }

        return makeService("200", "Liste récupérer", toutMesUsers);
    },
    getUser : async (id) => {
        const user = await DAOFactory.getDaoUser().getUsers(id);
        console.log(user);
        if (user === undefined || user === null) {
            return makeError("702", "utilisateur introubvable", null)
        }
        return makeService("201", "utilisateur trouvé" , user);
    },
    login : async (body) => {
        const users = await DAOFactory.getDaoUser().getAllUsers();
        for (const user of users) {
            if (user.Email === body.Email && user.mdp === body.mdp) {
                const token = await jwt.sign({ email: body.email }, jwtSecretKey, { expiresIn: '1h' });
                return makeService("206", "Token lier et créer", token);
            }
            return makeError("751", "mdp or email faux", null);
        }
    },
    inscription : async (new_user) => {
        const generate_id = uuidv4();
        let user = {id: generate_id, Name:new_user.Name, LastName:new_user.LastName, Email: new_user.Email, mdp:new_user.mdp};

        const User = await DAOFactory.getDaoUser().createUser(user);

        return makeService("202", "User crée avec succès", User);
    }

}