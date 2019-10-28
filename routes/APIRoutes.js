const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/api/burgers", function(req, res){
    db.Burger.create({name:req.body.input, devoured:false}).then(function(dbBurger){
        res.redirect("/");
    })
});

router.put("/api/burgers", function(req, res) {
    db.Burger.update(
        {devoured : req.body.devoured},
        { where:{ id:req.body.id }})
        .then(function(dbBurger){
            res.json(dbBurger);
        })
});

module.exports = router;
