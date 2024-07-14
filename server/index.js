const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const jwt = require('jsonwebtoken');
const EmployeeModel = require('./models/Employee')


const app = express()
app.use(express.json())
app.use(cors())



mongoose.connect('mongodb://127.0.0.1:27017/employee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('logged in successfully'))

  app.post('/register', async (req, res) => {
    const { name, email, password, role} = req.body;
  
     bcrypt.hash(password, 10)
     .then(hash => {
        EmployeeModel.create({ name, email, password: hash, role })
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
     }).catch(err => console.log(err.message))
  });
  

  app.post('/login',  (req, res) => {
    const { email, password } = req.body;
  
  
      EmployeeModel.findOne({ email: email})
     .then(
         user =>{

        if (user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if (err) {
                 
                    res.json('Incorrect password');
                }
          
                if (response) {
                   res.json('Success' );
                } 
              })
          }
          else{
           
                console.log('No record existed');
            }


     }
       
     )
   
  
      
   
  });




app.listen(3001, () => {
    console.log('server is running')
})