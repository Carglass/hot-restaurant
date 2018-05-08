module.exports = function(app) {
    app.get("/api/tables", function(req, res) {
        return res.json(tables);
        // connect to mysql, do query
    });
}
