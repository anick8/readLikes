
# Hashx like read Microservice
Microservice to implement like Read operations.

Run using -

npm install

npm start (OR) node index.js

# Change Guide
Make changes

git add .

git commit -m "Message"

git push hashx 

# Routes

## /getLikesbyID

Gets the likes by ID: 
Request Body - 
 - req.body.ID - ID of the Post,Asset,Bundle etc.

 
 Response Body -
 res.body.data  = {"LikeCount":No of Likes ,"LikeList": List of IdentityUUIDs that likes it }  // true or false

Query -
- select "IdentityUUID" from "Like" where "ID"=$1

## /getLikesbyIdentity

Request Body -
    
 req.body.IdentityUUID -  IdentityUUID of the Identity that liked it. 

 Response Body - 
 - res.body.data  = [List of  IDs that was liked by IdentityUUID] array

Query - 
select "ID" from "Like" where "IdentityUUID" =$1

# Response Format

[err,data,msg]

 - err : Error message from SQL try block
 - data : Data returned by SQL query
 - msg : Custom message defined in API
