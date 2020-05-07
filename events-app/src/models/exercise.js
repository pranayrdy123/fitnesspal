const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'exercise',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    exercise_name: {
      type: Sequelize.STRING
    },
    calories_burnt: {
        type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
)