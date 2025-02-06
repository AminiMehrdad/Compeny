const mongoose = require("mongoose");
const validator = require( "validator");

const CompenySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    regester_id: {
        type: String,
        default: "-1"
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

// Pre-save middleware to handle null or empty string
CompenySchema.pre('save', function (next) {
    if (this.regester_id === null || this.regester_id === "") {
        this.regester_id = "-1";
    }
    if (!this.createat || this.createat === "" || this.createat === null) {
        this.createat = Date.now(); // Set to the current date/time if invalid
    }
    next();
});
 

module.exports = mongoose.model("Compeny", CompenySchema)