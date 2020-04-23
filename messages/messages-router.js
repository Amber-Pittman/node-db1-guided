const express = require("express")
const db = require("../data/config")

const router = express.Router()


//Read everything from the database
// 1. Convert into an async function since we're dealing with promises.
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
               // The variable is what we assign this command to 
        const messages = await db.select("*").from("messages")
            // If everything runs correctly, we should have a list of messages in the
                // messages variable.
            // Single or Double quotes don't matter here because this is JS, not SQL
                // Knex will convert it automatically
            // Why do we have to rely on promises when talking to our database? Because the
                // data has to travel. Our database is a completely separate program
                // from our node program. Since we don't know how long it's going to take
                // before it reaches its destination, we use a promise. 
        // 4. Return it to the response
        // 5. Confirm by going into Insomnia. Create Get Messages request. 
            // http://localhost:4000/messages
        res.json(messages);
    } catch(error) {
        next(error)
    }
})


//Read a specific row
router.get("/:id", async (req, res, next) => {
    try {
        // `SELECT "*" FROM "messages" WHERE "id" = <some value>;`
        // http://localhost:4000/messages/1 --> Returns an array b/c it pulls everything
            // that's just how SQL operates 
        // Instead we can limit it with LIMIT 
            // `SELECT "*" FROM "messages" WHERE "id" = <some value> LIMIT 1;`
        // HOWEVER, it's going to return an array because it's a SELECT statement. To fix
            // this, we can destructure it with [] around the message variable. 
            // NOW, it's just a flat object. No longer in an array.
        // const [message] = await db.select("*").from("messages").where("id", req.params.id).limit(1)
        
        // There is another way.
        // The new way: Remove the limit. Go back to select. Replace select with first. And
            // remove the destructuring of message. 
            // This way also returns a flat object result. 
        // const message = await db.first("*").from("messages").where("id", req.params.id)

        // SIDE NOTE: if you wanted to specify columns you would use an array:
        // const message = await db.first(["title", "contents"]).from("messages").where("id", req.params.id)

        // We can shorten our message variable even more. 
            // Instead of saying .from(), we can call db as a function and specify the table
            // name right away. We can also leave out the wild card. So if we're not passing
            // in anything to .first, it will default to a wild card.
        // We can also rearrange it better for readability. 
            // "Select everything from messages where the ID is equal to the params.id and
                // get the first item."
        const message = await db("messages").where("id", req.params.id).first()
        res.json(message)  
              
    } catch(error) {
        next(error)
    }
})

//Create a row
router.post("/", async (req, res, next) => {
    try {
        // Since the database is going to automatically generate our ID, we just have to
        // take the title and the contents from the request body and send those through
        // the database. 

        //1. Create a payload object variable
        const payload = {
            // Set the value of title to req.body.title
            title: req.body.title,
            // Set the value of contents to req.body.contents
            contents: req.body.contents
        }

        // 2. Call await and insert the payload into messages
            // Raw SQL Statement for Inserting New Data: 
            // `INSERT INTO "messages" ("title", "contents") VALUES (<title>, <contents>);`
        // const message = await db("messages").insert(payload)

        // By default the .insert command returns an array of IDs here. That's because we
            // can actually pass in multiple payloads at the same time, which is why we see a
            // list of IDs as a response.
        // What can we do to make this response a little bit more helpful? We can return the
            // freshly added contents of that row. 
            // A. After we insert it, let's make another request to the DB to actually
                //  fetch the new row by inserting based on that ID. 
            // B. Instead of .insert and assigning it to the message variable, this is going
                // to be a list of IDs. We can just destructure, based on the first item
                // by ID. So we get that new ID that was inserted into the row.
            // C. We can use that by making another request to get the row data from Messages
                // where the id is equal to id we have in the variable and .first(). That 
                // should fetch our new row. Run insomnia again to confirm. 
        const [id] = await db("messages").insert(payload)
        const message = await db("messages").where("id", id).first()
        // 3. Return it to the response
        res.json(message)
        // 4. Confirm by going into Insomnia. Create Post Messages request. 
            // http://localhost:4000/messages
            // A. Change Body to JSON
            // B. Add in some text to the JSON body
                // {
                //     "title": "New Message",
                //     "contents": "Some contents"
                // }
            // C. The result returns an array of IDs instead of your text. Go look at your DB.
        // 5. Go to DB Browser. 
            // Refresh messages table. 
            // The new message is inserted. 
        
    } catch(error) {
        next(error)
    }
})

//Update a row
router.put("/:id", async (req, res, next) => {
    try {
        //1. Create a payload object variable that we can send through to Knex
        const payload = {
            // Set the value of title to req.body.title
            title: req.body.title,
            // Set the value of contents to req.body.contents
            contents: req.body.contents
        }  
        //2. Call await and then db messages where the ID is equal to the parameter, and
            // call update, where we pass the payload
            // !!!!! ALWAYS INCLUDE THE WHERE!!!!!
            // `UPDATE "messages" SET "title" = ? AND "contents" = ? WHERE "id" = ?;`

            // This is going to return the number of rows that were updated.  
            // await db("messages").where("id", req.params.id).update(payload)
             
             //It's not super helpful because we already know that one row was updated. 
             // Instead, let's call that specific message and return it like we did in 
             // the post request. Get the updated message and return it.
             // Const message calls await db messages where the ID is equal to the request
                // id and .first()
            // We know the id didn't change because we're not updating the id, so we can
                // use it when we call the newly updated row. 
                await db("messages").where("id", req.params.id).update(payload)
                const updatedMessage = await db("messages").where("id", req.params.id).first()
                
                // 3. Return it to the response
                res.json(updatedMessage)
                // 4. Confirm by going into Insomnia. Create Put Messages request. 
                    // http://localhost:4000/messages/1
                    // A. Change Body to JSON
                    // B. Add in some text to the JSON body
                        // {
                        //     "title": "Updated Message",
                        //     "contents": "Updated contents"
                        // }
                    // C. The result returns the 1st message object. 
                // 5. Go to DB Browser. 
                    // Refresh messages table. 
                    // The message is updated. 
    } catch(error) {
        next(error)
    }
})

//Delete a row
router.delete("/:id", async (req, res, next) => {
    try {
        // 1. Call await
        // `DELETE FROM "messages" WHERE "id" = ?;`
        await db("messages").where("id", req.params.id).del()
        
        // 2. Return it to the response
            // If you wanted to let a user know it was deleted, return a 202 and .json without
            // any content. 
        // res.json(message)

        // You could also return a 204. Successful but empty response. And then instead of 
            // calling .json(), you would call .end() since we're not actually sending back any
            // data. 
        res.json(204).end()
        // 3. Confirm by going into Insomnia. Create Delete Messages request. 
            // http://localhost:4000/messages/14
            // A. Change Body to No Body.
            // B. The result returns a 204 code. 
            // C. If you run the Get Messages request again, you will see that id 14 has
                //  been deleted. 
        // 4. Go to DB Browser. 
            // Refresh messages table. 
            // The message is deleted. 
    } catch(error) {
        next(error)
    }
})

module.exports = router