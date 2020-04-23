const express = require("express")
const db = require("../data/config")

const router = express.Router()


//Read everything from the database
// 1. Convert into an async function since we'll be dealing with promises.
router.get("/", async (req, res, next) => {
    // 2. You'll want a try catch statement
    try {
        // All the handler code goes inside the try statement
        // To select everything in Messages, you would write the SQL command 
            // `SELECT * FROM "messages";`
        // Since we already have Knex set up, we just need to use the db variable to connect it
        // 3. Call await and then our query builder with db
            // When we call that, what happens is the messages behind the scenes will be
                // converted by Knex to the SQL statement.
            // Then it's going to send that statement to our database
            // It's going to get the results it returns and stick it in a variable
                
        await db.select("*").from("messages")
    } catch(error) {
        next(error)
    }
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