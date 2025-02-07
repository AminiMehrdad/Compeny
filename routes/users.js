const express = require('express');
const Compenys = require("../database/models/compny");
const Employs = require("../database/models/epmploy");
const valid = require("../utils/EmployRequestValid");
const router = express.Router();


/* find_one */
router.get('/:id', async function(req, res) {
  try {
    const _id = req.params.id
    const companyname = await Compenys.findByIdAndUpdate(_id);
    const tragetcompeny = {name:companyname.name, id:_id};
    
    const targetEmploys = await Employs.find({companyID : _id});
    return res.render("Employs", {targetEmploys, tragetcompeny});
  } catch (error) {
    console.error("ther is some on read one ==>", error);
    return res.status(400).json({msg: "There is some error"});
  }  
});

/* create */
router.post('/', valid, async function(req, res) {
  console.log(req.body)
  try {
    console.log(req.body)
    const {ferstyName, lastName, IDNumber, gender, isManager, berthday, companyID} = req.body
    const new_Employ = new Employs({
      ferstyName: ferstyName.trim(),
      lastName:lastName.trim(),
      IDNumber:IDNumber,
      gender:gender, 
      isManager:isManager, 
      berthday:berthday,
      companyID:companyID
      });
    await new_Employ.save();
    res.json({msg: "ok"});
  } catch (error) {
    console.error("ther is some error on create ==>", error);
    return res.status(400).json({msg: "There is some error"});
  }
  
});

/* update */
router.put('/:id', valid, async function(req, res) {
  try {
    const employId = req.params.id;
    await Employs.findByIdAndUpdate(employId, req.body)
    res.json({msg: "ok"});
  }catch(error) {
    console.error("ther is some error on update ==>", error);
    return res.status(400).json({msg: "There is some error"});
  }
});

/* delete */
router.delete('/:id',async function(req, res) {
  try{
    const _id = req.params.id
    await Employs.findByIdAndDelete(_id);
    res.json({msg:"ok"});
  }catch(error){
    console.error("ther is some error on delete ==>", error);
    return res.status(400).json({msg: "There is some error"});
  }
});

module.exports = router;
