const tasks = require("../controllers/tasks");

module.exports = (app) => {

    app.get("/", (req, res)=>{
        tasks.index(req, res);
    });

    app.get("/:id", (req, res)=>{
        tasks.show(req, res);
    });

    app.post("/new/:name/:description", (req, res) =>{
        tasks.create(req, res);
    });

    app.put("/:id/update", (req, res) =>{
        tasks.update(req, res);
    });

    app.delete("/:id/delete", (req, res) =>{
        tasks.delete(req, res);
    });

};