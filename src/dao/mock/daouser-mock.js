const IdaoUser= require("../IdaoUser");

let Users = [
    {id : "1",Name : "Jhon", LastName : "Brosset", Email: "Jhon@test.fr", mdp:"test1" },
    {id : "2",Name : "Charlyne", LastName : "Quehe-le cozler", Email: "Charlyne@test.fr", mdp:"test04/07" },
    {id : "3",Name : "Shrek", LastName : "Shrek", Email: "Shrek@test.fr", mdp:"test3" }
]

class DAOUserMock extends IdaoUser {
    async getAllUsers() {
        return await Users;
    }
    async getUsers (id) {
        return Users.find(item => item.id === id);
    }
    async createUser (user) {
        Users.push(user);
        return await user;
    }

}

module.exports = DAOUserMock;