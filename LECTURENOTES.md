# Notes
1. Relational Databases - Spreadsheets on Steroids
   
    A. Collection of rows === a table
   
    B. Each one of those rows === a record

2. Database Features
   
    A. Give names and data types to columns
   
    B. Each row has a unique identifier (or primary key)
   
    C. Columns can "link" to other columns in separate tables (foreign keys)

3. Databases usually have more rows than columns.

4. SQL - Structured Query Language. 
   
    A. SQL is just a statement that allows us to query data from our database.

    B. Example of a valid SQL statements:
    1. `SELECT <columns> FROM <table> WHERE <column> = <value>;`
    2. It acts like a search function. 
        `SELECT email FROM users WHERE name = 'Amber Pittman';`
    
    C. The capitalized words are SQL commands. Capitalization is convention. SQL statements ALWAYS start with a command. 
    
    D. The lowercase words are what the commands are targeting. They are a part of our schema; the things that are defining the shape of our database that we can query against.
    
    E. The words in single quotes are just values. 
    
    F. SQL statements ALWAYS end with a semicolon. This means that if our SQL command ends in a semicolon, we can actually split it up onto separate lines. Example: 
    ```
    SELECT email 
    FROM users
    WHERE name = 'Amber Pittman';
    ```

5. Data Definition Language (DQL)
    * `SELECT <columns> FROM <table> WHERE <column> = <value>;`

6. Data Manipulation Language (DML)
    
    A. `INSERT INTO <table> (<columns>) VALUES (<values>);`

    B. `UPDATE <table> SET <column> = <new value> WHERE <column> = <value>;`

    C. `DELETE FROM <table> WHERE <column> = <value>;`

# Code Along
### DQL
#### Data Query Language (DQL): used to ask questions about the data stored in the database. The most commonly used SQL command by far is SELECT, and it falls in this category.

1. Open DB Browser for SQL Lite. 
    
    A. Click Open Database. Select the `northwind.db3` file. 
    
    B. Click on the Execute SQL button, as we'll be working here. 
    
    C. Type `SELECT CompanyName FROM Customer;`
    
    D. Press the Play Button. 
    
    E. You should see a list of Company Names. 

2. What this first SQL statement does, is it sending it to the database.    
    
    A. It's telling the database that we want to see the Company Name in every row in the Customer table. 
    
    B. It finds that data and return it back to us in the result.

3. What if you wanted to see other information?
    
    A. Go to the Browse Data tab.
    
    B. Click on Customer category table.
    
    C. You'll see we have all different kinds of Customer information.
    
    D. We can alter our SQL statement to return multiple columns if we wanted it to do that instead of just a single column. 
    
    E. Go back to the Execute SQL tab. 
    
    F. After CompanyName, you can specify a comma and then another column name. Example:
    `SELECT CompanyName, City, Country FROM Customer;`
    
    G. We can now see the City and Country of each Company. 

    H. We're essentially telling the database through SQL what we're wanting to see and what we want it to do. It returns a result to us of the Customer's Company Name, City, and Country. 

4. What if we don't want to specify each column individually? What if we just want to see everything from the Customer table? 
   
    A. We can use the Wildcard (`*`). Example:
    `SELECT * FROM Customer;`
   
    B. This is probably not super practical, as we usually want to see specific data. 

5. If we wanted to see all the customers in the US, we can use the WHERE command. `SELECT * FROM Customer WHERE Country = 'USA';`

    A. If you run that code, it will return all 13 customers in the US.

    B. Let's split it up for readability.
    ```
    SELECT * 
    FROM Customer 
    WHERE Country = 'USA'; 
    ```

6. Let's filter it down even more. Maybe we want to see all the Customers from the US and Portland. 

    A. Let's add another command to where the city is Portland by using "and". 
    
    B. Split it up for readability.
    ```
    SELECT * 
    FROM Customer 
    WHERE Country = 'USA'
    AND City = 'Portland'; 
    ```

    C. The results show 2 customers in Portland. 

7. You can also specify more cities if you wanted to. 
    
    A. Example
    ```
    SELECT * 
    FROM Customer 
    WHERE City = 'Portland' 
    OR City = 'London'; 
    ```

    B. Because these cities are in two different countries, we removed the country line. 

8. You can see how this can be really useful for gaining insight into large data sets. Even if we had 10M customers, we could still run our statement and get the results very, very quickly. 

9. Not only is SQL a valuable skill for programmers, it's also really valuable for anyone dealing with data on a really large scale. It's useful for a lot of different things - it's not just used in programming. 

    A. Accountants
    
    B. Scientists
    
    C. MBAs
    
    D. Data Analysts
    
    E. Marketing Teams

10. Anytime you're dealing with a large data set, knowing how to write SQL is very valuable.

11. Go back to the Browser Data tab again. 
    
    A. Take a look at the Order table. 

    B. You'll see over 16k orders in this file. 

    C. Scenario: you have a customer that wants to check the date of when and order was shipped. You'll need the ID of the order and the Ship Date. How would you write a SQL statement for that?

    ```
    SELECT ShippedDate 
    FROM Order 
    WHERE Id = 19570; 
    ```
    1. The version above produces a syntax error. It comes down to quotes. SQL is very particular about its quotes. 
    2. There can occasionally be conflicts between the SQL commands and the table names. 
    3. In this case, the word Order is a valid SQL command that deals with sorting. Therefore, you will want to put it in quotes. 
    4. Basically, if you have a table name that is the same as a command, you need to put it in quotes to differentiate. It should look like this:
     ```
    SELECT ShippedDate 
    FROM 'Order' 
    WHERE Id = 19570; 
    ```
    5. If you run the code with the quotes, your result should show the ShippedDate information on that one order. 

12. Because of the issue with table names and SQL commands, it's good practice to wrap any of your values (such as the table names) in double quotes. String values can have single quotes. Numbers do not need to be wrapped in quotes.
    ```
    SELECT "ShippedDate"
    FROM "Order"
    WHERE Id = 19570; // the place where the number assigned would take single quotes if it were a string
    ```

13. Instead of doing just a strict equality check, in our where statement, we can actually use other operators. For example, you can use greater than or less than symbols.
    
    A. Go back to Browse Data

    B. Go to Product table

    C. You'll see a lot of tables for products. 

    D. Scenario: you want to all of our products with a UnitsInStock that's greater than 100. 
    ```
    SELECT *
    FROM "Product"
    WHERE "UnitsInStock" >= 100; 
    ```
    
    1. Now we get a result of all the items with more than 100. 

    2. We can specify how these rows are ordered by using the Order By command. Then give it a column name.  
    ```
    SELECT *
    FROM "Product"
    WHERE "UnitsInStock" >= 100
    ORDER BY "UnitsInStock"; 
    ```

    3. The results will show that they are ordered by that number, starting with the lowest to highest.

    E. Maybe you want to limit your results to the top 3. 
    ```
    SELECT *
    FROM "Product"
    WHERE "UnitsInStock" >= 100
    ORDER BY "UnitsInStock"
    LIMIT 3; 
    ```
    * This might be useful if your query returns thousands of results and you only want to see a few of them.

14. SQL is really flexible in how we query our data. 

15. How to find the most expensive product in the products table?
    ```
    SELECT *
    FROM "Product"
    ORDER BY "UnitPrice"; 
    ```

    A. Perhaps you don't want to scroll all the way down to the bottom. You can change the statement. If you limit by 1, you get the cheapest product, so that won't work here. This happens because, by default, it sorts by ascending results. It would look like this:
    ```
    SELECT *
    FROM "Product"
    ORDER BY "UnitPrice" ASC // ASC is default. You don't necessarily need it
    LIMIT 1; 
    ```

    B. Therefore, in order to get the most expensive item, you would specify descending, or DESC. 
    ```
    SELECT *
    FROM "Product"
    ORDER BY "UnitPrice" DESC
    LIMIT 1; 
    ```

    C. We don't need WHERE here, because we are not filtering by any specific value. We're just seeing the single result based on the sort.

16. Reference [SQLite's documentation here](https://www.sqlite.org/index.html)

17. Really, the whole point of what we're doing so far is that we're learning how to work with large data sets. We're learning how to work with databases, talk to them, ask them questions, how to ask them to return data, etc. Eventually, we're going to write this syntax right into our JavaScript - right in our APIs - to work in our data. 

    A. For example, if a new user signs up, we can run that SQL statement to save that user to the database. 

    B. If a user logs in, we can run a statement to get their info from the database. Making sure they're passing in the correct username and password. 

18. Now that we have the ability to work with these large data sets with code, we can interface with them easily with our backends. That was the basics of querying - the basics of DQL. There's not that much that goes into it, just a few commands to do specific things. 
    

### DML
#### Data Manipulation Language (DML): used to manipulate the data stored in the database. Some examples are: INSERT, UPDATE , and DELETE.

1. DML is very, very similar to the DQL; just uses different commands.

2. The command you will see most often is INSERT and INSERT INTO. If we want to create a new row in our database, we would insert into the table, specify the column and provide some values. 

3. We're just writing a sentence, giving it some commands, and giving it some data to work with. 

4. What if you want to add a new category? 
    A. Go back to our DB Browser

    B. Browse Data
    
    C. Go to Category Tab

    D. Currently, we have 8 different food categories. 

    E. Let's insert our DML to insert a new category in Execute SQL. 
    ```
    INSERT INTO "Category" ("CategoryName", "Description")
    VALUES ('Frozen', 'Read-to-eat meals');
    ```

    F. While the results don't show anything, the log says that it was created successfully. 

    G. Go back to the Browse Data tab. You will see we have our new category row. The Id was automatically created. 

    H. If we were calling this from JavaScript and we had an endpoint for `POST("/users")`, we could now call this Insert Into command and pass the values from the request body. We'd pass something like a username, an email address, or password for the table it's expecting. 

5. To recap, we can query data with Select. We can insert data with Insert Into. What about updating existing data?
    
    * Still part of the DML, you can specify UPDATE. You can update a table name, then set some column name to some new value, and then you can give it a condition by using WHERE; Where some column equals some value. 

6. Let's update our command to a different description. 

    A. You'll notice that the id that was generated for Frozen was 9. We can use that when we are updating our data. 
    
    B. Side note: if you want to comment out something in your SQL statement, just use a double dash. 
    ```
    --INSERT INTO "Category" ("CategoryName", "Description")
    --VALUES ('Frozen', 'Read-to-eat meals');
    ```

    C. Let's write our update statement. 
    ```
    UPDATE "Category"
    SET "Description" = 'Desserts and ready-to-eat meals'
    WHERE "Id" = 9;
    ```

    D. Submit it. Again, you won't see it in the results. But if you go to the Browse Data tab, you will see it updated the description of the Frozen category. 

    E. This is useful in the event a customer/user needs to update their email address, among other things. 

7. What would happen if we forgot the Where in the statement? Not having the Where specify where something needs to be updated, it will update EVERYTHING in the description of Categories to the new description. 
    
    A. **This code overrides all descriptions!**
    ```
    UPDATE "Category"
    SET "Description" = 'Desserts and ready-to-eat meals';
    ```

    B. **This is irreversible!** The only way to bring it back is if you have a copy of your database somewhere else. 

    C. Our SQL is going to do EXACTLY what we tell it to do. It has no safeguards! So you have to be careful when writing these commands.  

    D. If you accidentally ran this update statement from your server, **THERE IS NO REVERT BUTTON!**

    E. In DB Browser, there is a Revert Changes button, but it does not exist in our API. Just make sure you have a backup of your database and you _should_ be okay. 

    F. This is where problems arise in SQL. If you've ever heard of SQL attacks, it's a form of vulnerability your app can have. A hacker could send up a SQL statement and if you're sending that SQL statement directly through your database without sanitizing it or without checking it or anything, the hacker could potentially run an update command that just updates everything in your database to some random value. Your database will be gone. 

    1. You have to be really careful about what you accept into your database, what commands you run, etc. 

    2. _With a lot of power, comes a lot of responsibility._ That mentality is found quite often in backend. 

    3. If you're in charge of setting up your infrastructure on your backends, always make sure you backup your database **multiple times** a day. AND **have a plan** for emergency rollbacks for this very situation.

8. Let's talk about deleting from the database. We've inserted it, updated it, and now we want to delete from the category and give it a selector (the id, in this instance). That's it! It's a very straightforward query. 

    ```
    --INSERT INTO "Category" ("CategoryName", "Description")
    --VALUES ('Frozen', 'Read-to-eat meals');

    --UPDATE "Category"
    --SET "Description" = 'Desserts and ready-to-eat meals'
    --WHERE "Id" = 9;

    DELETE FROM "Category"
    WHERE "Id" = 9;
    ```

    A. If you go back to Browse Data and take a look at Category, the Frozen category is gone. 

    B. Definitely don't forget the WHERE statement here! If you forget it, you delete everything!!!

    C. If you don't have a way to do an emergency rollback, plan to get fired. 

9. Now, we can utilize all of our CRUD operations! 

    A. We can Create it with INSERT INTO 

    B. We can Read it with SELECT

    C. We can Update it with UPDATE

    D. We can Delete it with DELETE FROM

10. How do we run these commands from our JavaScript code? We've been running it in DB Browser. We can execute the SQL directly into the database... But how do we actually connect to the database from JavaScript and run these commands from JavaScript?
    A. There are 3 different levels of abstraction that we can choose from in Javascript. When we say _abstraction_, we mean "code that you use without understanding what it does."
    1. **_No Abstraction_** - Write raw SQL statements and send them directly to the database
    2. **_ORM_** - Object Relational Mapper. It's a very high level of abstraction. 
        * A popular example of this is the popular JavaScript library, [Sequelize](https://sequelize.org/v5/). 
            * It abstracts all the database interactions behind JavaScript classes for us. 
            * Instead of creating a new row in your SQL statement, you create a new JavaScript class. And behind the scenes, it creates a database row. 
            * This can be really powerful and help you develop really quickly but ORMs like this don't provide a lot of flexibility.
            * They are very limited in what they can actually do. You **have** to abide by their rules, or you're going to run into problems.
    3. **_Query Builder_** - a library that allows us to write SQL with JavaScript functions behind the scenes. 
        * Instead of the SQL statement `INSERT INTO table_name VALUES ();`, it just kind of abstracts that SQL with this code: `table.insert({//some object}).into("table_name")`.
        * It just abstracts it into JavaScript code. 
        * It's a really good middle-ground because it abstracts a lot of the database interactions away from us (like an ORM) but not quite to the extent that an ORM does. 
        * It still allows us to customize our SQL queries if we need to. We still kind of need to see how things are happening "under the hood."
        * This is what we're going to use from here on out to interact with our database. 
        * The library we're going to use specifically is called [knexJS](https://knexjs.org/).