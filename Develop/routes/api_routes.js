var notes = require("../db/db.json");
var fs = require("fs");



module.exports = function(app) {
    app.get("/api/notes",
        function(req, res) {
            res.json(notes)
            console.log(notes)
        });
    app.post("/api/notes",
        function(req, res) {
            let data = req.body;

            console.log(data)


            res.json(notes)
            notes.push(data)

        });
    app.delete("/api/notes:id",
        function(req, res) {
            res.json(notes)
        });






}