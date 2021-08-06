const express = require("express");
const router = express.Router();
const Handicraft = require('../models/HandModel')

router.get("/getallHandicraft", async(req, res)=>{
    try {
        const handicraft = await Handicraft.find({})
        res.send(handicraft)
    } catch (error) {
        return res.status(400).json({message:error});
    } 
});

router.post("/addhandicraft", async(req,res)=>{
    const handicraft = req.body.handicraft

    try {
        const newHandicraft = new Handicraft({
            name : handicraft.name,
            image : handicraft.image,
            varients : ['small','medium','large'],
            description : handicraft.description,
            category : handicraft.category,
            prices : [handicraft.prices]
        })
        await newHandicraft.save()
        res.send('New Product added Successfully')
    } catch (error) {
        return res.status(400).json({message: error});
    }
});

router.post("/gethandicraftbyid", async(req,res)=>{
    const handicraftid = req.body.handicraftid
    try {
        const handicraft = await Handicraft.findOne({_id:handicraftid})
        res.send(handicraft)
    } catch (error) {
        return res.status(400).json({message:error});
    }
})

router.post("/edithandicraft",async(req,res)=>{
    const editedhandicraft = req.body.editedhandicraft

    try {
        const handicraft = await Handicraft.findOne({_id : editedhandicraft._id})

        handicraft.name = editedhandicraft.name,
        handicraft.description = editedhandicraft.description,
        handicraft.image = editedhandicraft.image,
        handicraft.category = editedhandicraft.category,
        handicraft.prices = [editedhandicraft.prices]

        await handicraft.save()

        res.send('Product details edited successfully')
    } catch (error) {
        return res.status(400).json({message: error});
    }
});

router.post("/deletehandicraft" , async(req,res)=>{
    const handicraftid = req.body.handicraftid

    try {
        await Handicraft.findOneAndDelete({_id : handicraftid})
        res.send('Handicraft Deleted Successfully')
    } catch (error) {
        return res.status(400).json({message : error});
        
    }
});

module.exports = router;