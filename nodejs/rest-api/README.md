# MongoDB

1. NoSQL database
2. Document based DB

# Database types

1. RDBMS (Aurora, Oracle, MySQl, Postgres, SQL Server, MariaDB, ...)
2. NoSQL (MongoDB, Cassendra, Neo4G, ...)
3. Data warehouse DB (Redshift, ...)
4. In Memory DB (Redis, Memcached) - Cache

## RDBMS Vs MongoDB

| RDBMS    | MongoDB    |
| -------- | ---------- |
| Database | Database   |
| Table    | Collection |
| Row      | Document   |
| Column   | Field      |

Tables
Emp
Dept
Foreign keys

Documents
It can have everything in own
Embeded document

Department
Employees

Blog
Categories - In its own
Tags
Posts - Refer to a caterory

Product
Detail
Sub docuemnt - Inventory/Stock

1.  Data redundency
    keys - id's
    we can join with other tables

    data is stored in only one place
    not duplicating the data

    Retreive - we need to read from all the relevent tables
    JOIN (concept)
    INNER JOIN
    OUTER JOIN
    SELF JOIN
    Try to join multiple table, we have to fetch the data from multiple tables
    Whic takes time
    Read operations

    Storge was costly
    Optimise data - Normalization? 1NF ... 4NF

2.  Data consistency

    RDBMS - now also can be scale vertically...

    Server 1 ---> too many requests --->
    Scaling :

    1.  You can imprrove the hardware with in the same machine (1GB -> 64GB) - Vertical scaling - RDBMS
    2.  You can add more machines - cluster (load balancing) - Horizontal scaling - NoSQL

             Server 1          Server 2

    req s1
    req s1

    Server1 and server2 are they in sync?
    Can we ensure data is consistent in both the servers?
    Trade off - Performance - Cosistency

          Server 1          Server 2

    req1 s1
    req2 s2

    option1: (Eventually consistent)
    req1 will write to server1 and send the response back
    then internally it will sync the data in server 2

    option2: (... strrongly... consistent)
    req1 will write to server1, server2, .... serverN and send the response back

How to get started with MongoDB

1. Start server (mongod or mongod.exe)
2. Default port server runs on is 27017
3. Connect to the server using the client (mongo)
4. `show dbs` list all the databases
5. `use mypofo` switch to the specific databse
6. `show collections` list all the collections within the database
7. DB operations
   1. Create a new collection
   2. Insert data into the collection (create a document)
   3. Retreive data from the collection
   4. Update a document
   5. Delete a document
   6. Filter data (page=1, limit=10)
   7. Search
   8. ....

db.projects.insertOne({
"name": "Mern Stack Project",
"tags": "mern, abcd, nodejs",
"category": "full stack",
"description": "sample description",
"slug": "mern-stack-project"
});

db.projects.insertOne({
"rank": 1,
"count":1,
"boolean":true
});

- db = constant we use to represent the currently selected database (`use mypofo`)
- projects = Name of the collection or RDBMS (table)
- insertOne() = Is a function used to insert single document to MongoDB
- find() = list the documents and filter
- pretty() = pretty print
- update
- remove

# Update

db.projects.findOneAndUpdate({
\_id: ObjectId("5eea422b0626d65d906e7174")
}, {
\$set: {
"name": "REST API",
"tags": "rest, api, node, mongodb",
"category": "api",
"description": "This is a sampel REST API",
"slug": "rest-api"
}
});

Notes!

1. By default mongodb will create a unique & primiry key. Name if the field will be \_id.
2. It's ob type ObjectId
3. MongoDB internally uses JSON like syntax - BSON (what is BSON | how is it different JSON...)
4. CRUD = Create Retreive Update Delete (CURD)
