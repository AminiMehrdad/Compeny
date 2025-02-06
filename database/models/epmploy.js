const mongoose = require("mongoose");

const EmploySchema = new mongoose.Schema({
    ferstyName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
      },
      lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
      },
      IDNumber: {
        type: String,
        required: true,
        match: /^\d{10}$/i,
      },
      gender: {
        type: String,
        enum: ['male', 'female', "other"],
        required: false,
        default: "male"
      },
      isManager: {
        type: Boolean,
        default: false
      },
      berthday: {
        type: Date,
        required: true,       
      },
      companyID: {
        type: String,
        required: true,
      }
})


module.exports = mongoose.model("Employ", EmploySchema)