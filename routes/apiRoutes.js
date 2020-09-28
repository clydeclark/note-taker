// Dependencies
let notesData = require("../db/db.json");
const {
    v4: uuidv4
} = require("uuid");

// Routing
module.exports = function (app) {

    // API get request
    app.get("/api/notes", function (req, res) {
        res.json(notesData);
    })

    // API post request
    app.post("/api/notes", function (req, res) {
        const newId = uuidv4();
        req.body.id = newId;
        notesData.push(req.body);
        res.send(notesData);
    });

    // API delete requests
    app.delete("/api/notes/:id", function (req, res) {
        notesData = notesData.filter(note => {
            if (note.id == req.params.id) {
                return false;
            }
            return true;
        });
        res.send(notesData);
    })
}