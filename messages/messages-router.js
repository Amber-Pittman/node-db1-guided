const express = require("express")
const db = require("../data/config")

const router = express.Router()


//Read everything from the database
// 1. Convert into an async function since we'll be dealing with promises.
router.get("/", async (req, res, next) => {

})

//Read a specific row
router.get("/:id", async (req, res, next) => {

})

//Create a row
router.post("/", async (req, res, next) => {

})

//Update a row
router.put("/:id", async (req, res, next) => {

})

//Delete a row
router.delete("/:id", async (req, res, next) => {

})

module.exports = router