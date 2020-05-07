const express = require('express')
const exercises = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
//const bcrypt = require('bcrypt')

const exercise = require('/Users/Shared/fitnesspal-3/events-app/src/models/exercise.js')
exercises.use(cors())



exercises.post('/search', (req, res) => {
    exercise.findOne({
      where: {
        exercise_name: req.body.exercise_name
      }
    })
      .then(exercise => {
        if (exercise) {
          let token = jwt.sign(exercise.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
           res.send(token)
        
        }
         else {
          res.status(400).json({ error: 'Exercise does not exist' })
        }
      }
    
)})
    
  
  
  module.exports = exercises