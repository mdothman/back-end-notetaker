const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();




const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

let html = require("./routes/html_routes");
let api = require("./routes/api_routes");
app.use("/html_routes", html);
app.use("/api_routes", api)




app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});