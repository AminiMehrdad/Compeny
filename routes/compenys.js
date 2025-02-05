const express = require('express');
const Compenys = require("../database/models/compny");
const valid = require("../utils/ComponyRequestValid");
const router = express.Router();

/* Read */
router.get('/', async function(req, res) {
  try{
    const compenys = await Compenys.find({});
    return res.json(compenys);
  } catch(error) {
    console.error("there is some error ==>", error)
    return res.status(400).json({msg: "There is some proplem"})
  }
});

/* find_one */
router.get('/:id', async function(req, res) {
  try {
    const _id = req.params.id
    const targetcompany = await Compenys.findById(_id);
    return res.json(targetcompany);

  } catch (error) {
    console.error("ther is some on read one ==>", error);
    return res.status(400).json({msg: "There is some error"});
  }  
});

/* create */
router.post('/', valid, async function(req, res) {
  try {
    const new_compeny = new Compenys(req.body);
    await new_compeny.save();
    res.json({msg:"user add secssfuly"});
  } catch (error) {
    console.error("ther is some error on create ==>", error);
    return res.status(400).json({msg: "There is some error"});
  }
  
});

/* update */
router.put('/:id', valid, async function(req, res) {
  try {
    const _id = req.params.id
    await Compenys.findByIdAndUpdate(_id, req.body)
    const new_company = await Compenys.findById(_id)
    res.json( new_company);
  }catch(error) {
    console.error("ther is some error on update ==>", error);
    return res.status(400).json({msg: "There is some error"});
  }
});

/* delete */
router.delete('/:id',async function(req, res) {
  try{
    const _id = req.params.id
    await Compenys.findByIdAndDelete(_id);
    res.json({msg:"delete wes secss"});
  }catch(error){
    console.error("ther is some error on delete ==>", error);
    return res.status(400).json({msg: "There is some error"});
  }
});

module.exports = router;
