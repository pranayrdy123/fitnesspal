const express = require('express')
const foods = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const foodss = require('/Users/Shared/fitnesspal-3/events-app/src/models/food.js')
foods.use(cors())




foods.post('/search', (req, res) => {
    foodss.findOne({
      where: {
        food_name: req.body.food_name
      }
    })
      .then(food => {
        if (food) {
          let token = jwt.sign(food.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
           res.send(token)
        
        }
         else {
          res.status(400).json({ error: 'Food item does not exist' })
        }
      }
    
)})
    
  
  
  module.exports = foods