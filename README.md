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