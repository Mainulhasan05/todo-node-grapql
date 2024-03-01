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

// getusebyid
const getUserById = async (id) => {
    try {
        const user = await UserModel.findOne({ where: { id } });
        return user;
    } catch (err) {
        console.log(err);
        return null;
    }
};

module.exports = {
    getUsers,
    getUserById
};