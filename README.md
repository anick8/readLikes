# Hashx Follow Read Microservice
Microservice to implement Follow Read operations.

Run using -

npm install

npm start (OR) node index.js

# Change Guide
Make changes

git add .

git commit -m "Message"

git push hashx 

# Routes

## /isFollow

Checks if Follows and if Following or not, given two IdentityUUIDs : 
Request Body - 
 - req.body.Follower
 - req.body.Following

 
 Response Body -
 res.body.data  = {"isFollowing","isFollower"}  // true or false

Query -
- 'select "Follower" from "Follow" where "Follower" = $1 AND "Following" = $2' 
AND
- 'select "Follower" from "Follow" where "Follower" = $2 AND "Following" = $1' 



## /readAllFollows

Request Body -
    
 - req.body.Follower - Person A / From IdentityUUID
 - req.body.Following - Person B / To IdentityUUID
 - req.body.ErsOrIng - Followers ( 0 ) or Following ( 1 ) , Default 0 
- req.body.limit : Number of rows returned , Default 20 
- req.body.offset : Offset of rows returned, Default 0 

 Response Body - 
 - res.body.data  = [{"Follower","Following"}] array

Query - \
- 'SELECT * from "Follow" WHERE ' + (ErsOrIng?"\"Follower\"":"\"Following\"")+ ' =$1 LIMIT $2 OFFSET $3

# Response Format

[err,data,msg]

 - err : Error message from SQL try block
 - data : Data returned by SQL query
 - msg : Custom message defined in API
