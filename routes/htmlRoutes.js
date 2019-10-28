const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", function(req,res){
    db.Burger.findAll({}).then(function(dbBurger){
        console.log(dbBurger)
        res.render("index", {burgers:dbBurger})
        
    })
})
module.exports = router;
