const UserModel = require('../models/UserModel');

const getUsers = async () => {
    try {
        const users = await UserModel.findAll();
        return users;
    } catch (err) {
        console.log(err);
        return [];
    }
    };

module.exports = {
    getUsers
};