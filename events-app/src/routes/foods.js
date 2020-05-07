const express = require('express')
const foods = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const food = require('/Users/Shared/fitnesspal-3/events-app/src/models/food.js')
foods.use(cors())




foods.post('/search', (req, res) => {
    food.findOne({
      where: {
        food_name: req.body.food_name
      }
    })
      .then(food => {
        if (food) {
          
            res.send(token)
        }
         else {
          res.status(400).json({ error: 'Food item does not exist' })
        }
    }
)
.catch(err => {
    res.status(400).json({ error: err })
  })
})
  
  
  module.exports = foods