var pgsql = require('../lib/pgsql')

exports.isFollow = async (req) => { 
        var Follower = req.body.Follower ;
        var Following = req.body.Following ;
        console.log(Follower,Following);
        qname1='select * from "Follow" where "Follower"=$1 AND "Following"=$2' 
        qname2='select * from "Follow" where "Follower"=$2 AND "Following"=$1' 
        qarg=[Follower,Following]
        try{
            result =await pgsql.conquery(qname1,qarg)
            if(result.rowCount === 0)
                isFollowing=false
            else
                isFollowing=true

            result =await pgsql.conquery(qname2,qarg)
            if(result.rowCount === 0)
                isFollower=false
            else
                isFollower=true

            data = {'isFollowing':isFollowing,'isFollower':isFollower}

            return [null,data,"Successfully checked Follow"]
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data base"]
        }
};

exports.readAllFollows = async (req) => {

    var Follower = req.body.Follower ;
    var limit = req.body.limit || "20"; 
    var offset = req.body.offset || "0"; 
    var ErsOrIng = req.body.ErsOrIng || 0;  //0 : Followers, 1 : Following
    console.log(ErsOrIng);
    var qname = 'SELECT ' + (ErsOrIng?("\"Following\""):("\"Follower\""))+ ' from "Follow" WHERE ' + (ErsOrIng?("\"Follower\""):("\"Following\""))+ ' =$1 LIMIT $2 OFFSET $3'
    var qarg = [Follower,limit,offset]
	try{
            result =await pgsql.conquery(qname,qarg)
            if (result.rowCount==0)
            {
                data = {'err':('No Follow'+ (ErsOrIng?'ers':'ing'))}
                return [null,data,("No Follow"+(ErsOrIng?"ers":"ing"))]
            }
            else
            {
                console.log(result.rows)
                return [null,result.rows,"Successfully fetched all Follows"]
            }
            
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data"]
        }
};
