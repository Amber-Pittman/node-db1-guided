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
        `SELECT email FROM users WHERE name = "Amber Pittman";`
    
    C. The capitalized words are SQL commands. Capitalization is convention. SQL statements ALWAYS start with a command. 
    
    D. The lowercase words are what the commands are targeting. They are a part of our schema; the things that are defining the shape of our database that we can query against.
    
    E. The words in quotes are just values. 
    
    F. SQL statements ALWAYS end with a semicolon. This means that if our SQL command ends in a semicolon, we can actually split it up onto separate lines. Example: 
    ```SELECT email 
    FROM users
    WHERE name = "Amber Pittman";```

