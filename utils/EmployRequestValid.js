const validator = require("validator");

function valid(req, res, next){
    const {
        ferstyName,
        lastName, 
        IDNumber, 
        gender, 
        isManager,
        berthday,
        companyID
    } = req.body;
    if(!ferstyName.trim() || !lastName.trim() || !IDNumber.trim() || !berthday || companyID){
        return res.status(400).json({msg: "complit inputs"});
    };

    if(! /^\d{10}$/i.test(IDNumber)) {
        return res.status(400).json({msg: "notacceptbel ID Number"});
    };

    if(!!createat && !validator.isISO8601(berthday)){
        return res.status(400).json({msg: "input rung Date Time"})
    };
    next()


}



module.exports = valid;