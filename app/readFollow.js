var pgsql = require('../lib/pgsql')

exports.isFollowing = async (req) => { 

        var {Follower,Following} = req.body;
        qname='select "Follower" from "Follow" where "Follower" = $1 AND "Following" = $2' 
        qarg=[Follower,Following]
        try{
            result =await pgsql.conquery(qname,qarg)
            if(result.rowCount == 0)
                data = {'isFollowing':false}
            else
                data ={'isFollowing':true}
            return [null,data,"Successfully checked Follower/Following"]
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data base"]
        }

};

exports.readAllFollowing = async (req) => {

    var Follower = req.body.Follower ;
    var limit = req.body.limit || "20"; 
    var offset = req.body.offset || "0"; 
    var qname = 'SELECT "Following" from "Follow" WHERE "Follower"=$1 LIMIT $2 OFFSET $3 '
    var qarg = [Follower,limit,offset]
	try{
            result =await pgsql.conquery(qname,qarg)
            if (result.rowCount==0)
            {
                err = {'err':'Not following Anyone'}
                return [err,null,"Not Following Anyone"]
            }
            else
                return [null,result.rows,"Successfullt fetched Following"]
            
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data"]
        }


};
exports.readAllFollowers = async (req) => {

    var Following = req.body.Following ;
    var limit = req.body.limit || "20"; 
    var offset = req.body.offset || "0"; 
    var qname = 'SELECT "Follower" from "Follow" WHERE "Following"=$1 LIMIT $2 OFFSET $3 '
    var qarg = [Following,limit,offset]
	try{
            result =await pgsql.conquery(qname,qarg)
            if (result.rowCount==0)
            {
                err = {'err':'Not followed by Anyone '}
                return [err,null,"Not Followed by Anyone"]
            }
            else
                return [null,result.rows,"Successfullt fetched Followers"]
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data"]
        }


};
