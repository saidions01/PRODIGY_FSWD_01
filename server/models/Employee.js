const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
  })
 
const EmployeeModel = mongoose.model('employees', EmployeeSchema)
module.exports = EmployeeModel