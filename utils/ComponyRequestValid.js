const validator = require("validator");

function valid(req, res, next){
    const {name, regester_id, city, state, createat, phone} = req.body;
    if(!name.trim() || !city.trim() || !state.trim() || !phone.trim()){
        return res.status(400).json({msg: "complit inputs"});
    };

    if(!validator.isMobilePhone(phone, "fa-IR")) {
        return res.status(400).json({msg: "notacceptbel Phone Number"});
    };

    if(!!createat && !validator.isISO8601(createat)){
        return res.status(400).json({msg: "input rung Date Time"})
    };
    next()


}



module.exports = valid;

