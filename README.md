# Introduction to Relational Databases, SQL and Knex

Guided project for Node DB 1 module.

In this project we will cover the basics of `Structure Query Language (SQL)`, `Relational Databases`, and `Knex.js Queries`.

## Prerequisites

- [DB Browser for SQLite](https://sqlitebrowser.org) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm install` to download dependencies.


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

# Code Along
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
