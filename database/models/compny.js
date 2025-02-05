const mongoose = require("mongoose");
const validator = require( "validator");

const CompenySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    regester_id: {
        type: String,
        default: -1
    },
    city : {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    createat: {
        type:  Date,
        default: Date.now
    },
    phone: {
        type: String,
        require: true,
        validate: {
            validator: function(value) {
                return validator.isMobilePhone(value, "fa-IR");
            },
            message: (props) => `${props.value} is not a valid phone number!`,
        },
    }
})

module.exports = mongoose.model("Compeny", CompenySchema)