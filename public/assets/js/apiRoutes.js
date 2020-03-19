module.exports = function(app){

    app.get("/api/notes", (req, res) =>{
       return res.json();
    });

    app.post("/api/notes", (req, res)=>{
        const notesPost = req.body;

    });

    app.delete("/api/notes/:id", (req, res)=>{
        const message = req.params.id;

    })

};
