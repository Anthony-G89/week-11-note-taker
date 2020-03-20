const router = require("express").Router();
const fs = require ("fs");

router.get("/notes", (req, res) => {
   const notes = fs.readFileSync("./db/db.json", "utf8")
   return res.json(JSON.parse(notes))
});

router.post("/notes", (req, res) => {
    const notesPost = req.body;
    notesPost.id = Math.random()
    console.log(notesPost);

    const notes = fs.readFileSync("./db/db.json", "utf8")
    const notesArray = JSON.parse(notes);
    notesArray.push(notesPost);

    fs.writeFile("./db/db.json", JSON.stringify(notesArray), (err) =>{
        if (err) throw err;

        return res.json(true);
    })
    
});

router.delete("/notes/:id", (req, res) => {
    const message = req.params.id;
    

});

module.exports = router;

