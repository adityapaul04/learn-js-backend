# MongoDB Setup Guide

## Install MongoDB on the System

You can install MongoDB by following the instructions on the official MongoDB website:
[Install MongoDB](https://docs.mongodb.com/manual/administration/install-community/)

## Install MongoDB Extension on VS Code

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the square icon on the Sidebar or by pressing `Ctrl+Shift+X`.
3. Search for "MongoDB" in the Extensions view search box.
4. Install the "MongoDB for VS Code" extension provided by MongoDB.
5. Once installed, you may need to reload Visual Studio Code to activate the extension.

## Create a Playground with (.mongodb.js) Extension

1. Open Visual Studio Code.
2. Create a new file and name it with the `.mongodb.js` extension, for example, `playground.mongodb.js`.
3. You can now use this file to write MongoDB commands and scripts.

## Using Mongosh (MongoDB Terminal)

Mongosh is the new MongoDB Shell. You can install it by following the instructions provided in the MongoDB documentation:
[Mongosh Installation](https://docs.mongodb.com/mongosh/install/)

After installation, you can open Mongosh and connect to your MongoDB instance to execute commands interactively.

# MongoDB Commands

```javascript
// MongoDB Commands
1. `show dbs;`: Show a list of all databases on the server.

2. `use <database_name>;`: Switch to a specific database.

3. `db.createCollection("<collection_name>");`: Create a new collection within the current database.

4. `db.<collection_name>.insertOne({<document>});`: Insert a single document into a collection.

5. `db.<collection_name>.insertMany([{<document1>}, {<document2>}, ...]);`: Insert multiple documents into a collection.

6. `db.<collection_name>.find();`: Retrieve all documents from a collection.

7. `db.<collection_name>.find({<query>});`: Retrieve documents from a collection based on a query.

8. `db.<collection_name>.findOne({<query>});`: Retrieve a single document from a collection based on a query.

9. `db.<collection_name>.updateOne({<filter>}, {<update>});`: Update a single document in a collection.

10. `db.<collection_name>.updateMany({<filter>}, {<update>});`: Update multiple documents in a collection.

11. `db.<collection_name>.deleteOne({<filter>});`: Delete a single document from a collection.

12. `db.<collection_name>.deleteMany({<filter>});`: Delete multiple documents from a collection.

13. `db.<collection_name>.aggregate([{<pipeline_stage>}, {<pipeline_stage>}, ...]);`: Perform aggregation operations on documents in a collection.

14. `db.dropDatabase();`: Delete the current database.

15. `db.<collection_name>.drop();`: Delete the specified collection.

16. `db.stats();`: Get statistics about the current database.

17. `db.<collection_name>.stats();`: Get statistics about a specific collection.
```
# MongoDB Operators

1. **Comparison Operators:**
   - `$eq`: Matches values that are equal to a specified value.
   - `$ne`: Matches values that are not equal to a specified value.
   - `$gt`: Matches values that are greater than a specified value.
   - `$gte`: Matches values that are greater than or equal to a specified value.
   - `$lt`: Matches values that are less than a specified value.
   - `$lte`: Matches values that are less than or equal to a specified value.

2. **Logical Operators:**
   - `$and`: Joins query clauses with a logical AND.
   - `$or`: Joins query clauses with a logical OR.
   - `$not`: Inverts the effect of a query expression.
   - `$nor`: Joins query clauses with a logical NOR.

3. **Element Operators:**
   - `$exists`: Matches documents that have the specified field.
   - `$type`: Selects documents if a field is of the specified type.

4. **Evaluation Operators:**
   - `$expr`: Allows the use of aggregation expressions within the query language.
   - `$jsonSchema`: Validate documents against the given JSON Schema.

5. **Array Operators:**
   - `$all`: Matches arrays that contain all elements specified in the query.
   - `$elemMatch`: Selects documents if at least one array element matches the specified query criteria.
   - `$size`: Matches arrays with a specific number of elements.

6. **Miscellaneous Operators:**
   - `$regex`: Provides regular expression capabilities for pattern matching.
   - `$text`: Performs text search.
   - `$where`: Matches documents based on JavaScript expression.

