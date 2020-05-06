const db =require("../db/db.json");


let id = uniqid("");

module.exports = function(app) {
app.get("/api/notes", function(req, res) {
       
        res.json(db)
});

app.post("/api/notes", function ({body}, res){
        
let data = body;
data.id=id;
db.push(data);
res.json(true)
})

app.delete("/api/notes/:id", function({params},res){
    db.filter(function(note){
      if (note.id === params.id){
            return note
        }
        else{console.log("error")}
        res.json(note)
    })
}) 
}

    


