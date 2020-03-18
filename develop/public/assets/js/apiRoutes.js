module.exports = function(app){
    app.get("/api/notes", (req, res) =>{
        res.json();
    });

    app.post("/api/notes", (req, res)=>{
        res.json();

    });

};
