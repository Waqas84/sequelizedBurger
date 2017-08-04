var db = require("../models");
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burgers.findAll({}).then(function(data) {
            var burgerObj = {
                burgers: data
            }
            console.log("burgerObj: ", burgerObj)
            res.render("index", burgerObj)
        });
    });

    app.post("/", function(req, res) {
        db.Burgers.create({
            burger_name: req.body.name,
            devoured: false
        }).then(function(data) {
            res.redirect("/");
        });
    });

    app.put("/:id", function(req, res) {
        db.Burgers.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.redirect("/");
        });
    });


}