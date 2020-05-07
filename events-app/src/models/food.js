const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'food',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    food_name: {
      type: Sequelize.STRING
    },
    calories: {
        type: Sequelize.INTEGER
    },
    fat: {
        type: Sequelize.INTEGER
    },
    carbs: {
        type: Sequelize.INTEGER
    },
    protien: {
        type: Sequelize.INTEGER
    }
    
  },
  {
    timestamps: false
  }
)