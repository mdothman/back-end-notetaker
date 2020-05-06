const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();




const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


require("./routes/api_routes")(app);
require("./routes/html_routes")(app);




app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});