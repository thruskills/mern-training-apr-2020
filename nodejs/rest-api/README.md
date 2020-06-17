# MongoDB

1. NoSQL database
2. Document based DB

# Database types

1. RDBMS (Aurora, Oracle, MySQl, Postgres, SQL Server, MariaDB, ...)
2. NoSQL (MongoDB, Cassendra, Neo4G, ...)
3. Data warehouse DB (Redshift, ...)
4. In Memory DB (Redis, Memcached)

## RDBMS Vs MongoDB

| RDBMS    | MongoDB    |
| -------- | ---------- |
| Database | Database   |
| Table    | Collection |
| Row      | Document   |
| Column   | Field      |

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
