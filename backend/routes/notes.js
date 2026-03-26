const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
// const { wait } = require('@testing-library/user-event/dist/utils');
const { body, validationResult } = require('express-validator');


//route-1:fetch all the notes using: Get  "api/auth/getuser". login required 
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {

        const notes = await Note.find({ user: req.user.id });
        res.json(notes)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


//route-2:Add a new notes using: post  "api/notes/addnote". login required 
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be  atleast 5 character').isLength({ min: 4 }),

], async (req, res) => {

    try {

        const { title, description, tag } = req.body;

        // const notes = await Notes.find({ user: req.user.id });

        //If there are errors, return bad request and the errors
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savedNote = await note.save();

        res.json(savedNote);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})



//route-3:Update a notes using: put "api/notes/updatenote". login required 
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;

    try {
        // create a new note object 
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //Find the note to be update and update it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found!") };

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });

        res.json(note);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})


//route-4:Delete a notes using: DELETE "api/notes/deletenote". login required 
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {

        //Find the note to be delete and delete it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found!") };

        // Unauthorized user can not be access.
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id);

        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }




})

module.exports = router