var notes = require("../db/db.json");
var uniqid = require('uniqid');




module.exports = function(app) {
    app.get("/api/notes",
        function(req, res) {
            res.json(notes)

        });
    app.post("/api/notes",
        function(req, res) {
            let id = uniqid("")
            let data = req.body;
            data.id = id;
            console.log(data)

            res.json(notes)
            notes.push(data)



        });
    app.delete("/api/notes:id",
        function(req, res) {
            res.json(notes)
        });






}