const User = require("./user-model");
const IdaoUser = require("../IdaoUser");



class DaouserMongoose extends IdaoUser {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async getAllUsers () {
        return await User.find();
    }
    async getUsers (id) {
        return await User.findOne({id : id});
    }
    async createUser(user) {
        const newUser = new User(user);
        return await newUser.save();
    }
}

module.exports = DaouserMongoose;