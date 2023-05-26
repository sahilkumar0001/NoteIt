const express = require('express')
const router = express.Router();
const Note = require('../modals/Notes');

//ADD
router.post('/addnote' , (req,res)=>{
    console.log('api hit...')
    try {
        if (req.body.title===""||req.body.description==="") {
            res.status(400).send("enter title and description")
        } else {
        const note = Note(req.body);
        note.save();
        res.send(note);
        }
    } catch (error) {
        res.status(500).send('Error')
    }

})

//FETCH
router.get('/allnotes' , async(req,res)=>{
    console.log('api hit...')
    try {
        const notes = await Note.find();
        res.send(notes);
    } catch (error) {
        res.status(400).send('Error')
    }
})

//UPDATE
router.put('/editnote/:id' , async(req,res)=>{
    console.log('api hit...')
    try {
        const {title,description} = req.body;
        const id = req.params.id;
        console.log(id);
        
        
        const note = await Note.findByIdAndUpdate(id , {title:title,description:description},{new:true});
        
        res.send(note)
    } catch (error) {
        res.status(400).send('Error')
    }
})

//DELETE
router.delete('/deletenote/:id' , async(req,res)=>{
    console.log('api hit...')
    try {
        const id = req.params.id;
        await Note.findByIdAndDelete(id);
        
        res.json({status:"deleted",id})
    } catch (error) {
        res.status(400).send('Error')
    }
})

module.exports = router;