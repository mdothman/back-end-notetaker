var notes = require("../db/db.json");
var fs = require("fs");



module.exports = function(app) {
    app.get("/api/notes",
        function(req, res) {
            res.json(notes)

        });
    app.post("/api/notes",
        function(req, res) {
            let data = req.body;

            console.log(data)


            res.json(notes)
        });
    app.delete("/api/notes:id",
        function(req, res) {
            res.json(notes)
        });

    function handleRequest(req, res) {
        var path = req.url;

        if (path) {

            return renderNotesPage(req, res);

        };

    };

    function renderIndexPage(req, res) {
        fs.readFile(__dirname + "notes.html", function(err, data) {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>")
            } else {

            }
        })
    }




}