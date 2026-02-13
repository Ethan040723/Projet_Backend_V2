const User = require("./user-model");
const IdaoUser = require("../IdaoUser");



class DaouserSequelize extends IdaoUser {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async getAllUsers () {
        return await User.findAll();
    }
    async getUsers (id) {
        return await User.findByPk(id);
    }
    async createUser(user) {
        return await User.create(user);
    }
}

module.exports = DaouserSequelize;