const express = require("express")
const router = express.Router()
const uniqid = require('uniqid');


let Note = require("./noteData");
let id = uniqid("");


router.get("/api/notes",
    function(req, res) {
        // console.log(note)
        res.json(Note);


    });
router.post("/api/notes",
    function(req, res) {

        let data = new Note();
        data.title = req.body.title;
        data.id = id;
        data.text = req.body.text
            // console.log(data);
        data.save(function(err) {
            if (err) {
                console.log(err);
                return;
            } else {
                req.flash("success", "Note Added");
                res.redirect("notes");
            }
        });






    });

router.delete("/api/notes/:id",
    function(req, res) {
        if (!req.note._id) {
            res.status(500).send();
        }
        let query = { _id: req.params.id }
        Note.findById(req.params.id, function(err, note) {
            if (note.id != req.params._id) {
                res.status(500).send();
            } else {
                Note.remove(query, function(err) {
                    if (err) {
                        console.log(err);
                    }
                    res.send("success")
                })
            }
        })




    });
module.exports = router;