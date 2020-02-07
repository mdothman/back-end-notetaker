var path = require("path");
var fs = require("fs");


module.exports = function(app) {

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));

        function renderSavedNotes(notes) {
            fs.readFile("./db/db.json", function(err, data) {
                if (err) {
                    throw err
                } else {
                    res.renderNoteList(data)
                }

            })
        }
    });
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });





}