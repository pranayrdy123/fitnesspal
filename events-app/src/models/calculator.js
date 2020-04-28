// Import Express.js and Body Parser (handle post request)
const express = require('express');
const bodyParser = require('body-parser');

// Use express & body parser
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// BMI Calculator Rout ====================
app.get('/bmiCalculator', function(req, res) {
    res.sendFile(__dirname + '/bmiCalculator.vue');
  });
  
  app.post('/bmiCalculator', function(req, res) {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmiValue = (weight / Math.pow(height, 2)).toFixed(1);
  
    if (bmiValue < 18.5) {
      res.send(`Your BMI is ${bmiValue}, so you're underweight`);
    }
    
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      res.send(`Your BMI is ${bmiValue}, so you have a normal weight`);
    }
    
    else {
      res.send(`Your BMI is ${bmiValue}, so you're overweight`);
    }
  });
  
  
  // Server start on port 3000
  app.listen(3000, function () {
    console.log('Server started on port 3000');
    res.send('Server started on port 3000');
  });