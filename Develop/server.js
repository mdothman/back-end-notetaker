var express = require("express");
var app = express();
var fs = require("fs")
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

require("./routes/html_routes")(app);
require("./routes/api_routes")(app);




app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});