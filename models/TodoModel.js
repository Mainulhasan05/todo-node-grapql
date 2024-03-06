const { DataTypes } = require('sequelize');
const sequelize = require('../db_config/db.js');
const Todo = sequelize.define('Todo', {
    taskTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activeStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    progress: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    priority: {
      type: DataTypes.ENUM('Low', 'Medium', 'High'),
      allowNull: true,
      defaultValue: 'Low'
    },
    createdBy: {
        type: DataTypes.INTEGER, // Assuming user ID is an integer
        allowNull: true
      }
  });
  
  
  (async () => {
    await Todo.sync();
    console.log("Todo model synchronized");
  })();
  
  module.exports = Todo;