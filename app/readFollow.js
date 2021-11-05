var pgsql = require('../lib/pgsql')

exports.isFollow = async (req) => { 
        var {Follower,Following} = req.body;
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
    var qname = 'SELECT * from "Follow" WHERE ' + (ErsOrIng?"\"Follower\"":"\"Following\"")+ ' =$1 LIMIT $2 OFFSET $3 '
    var qarg = [Follower,limit,offset]
	try{
            result =await pgsql.conquery(qname,qarg)
            if (result.rowCount==0)
            {
                err = {'err':('No Follow'+ (ErsOrIng?'ers':'ing'))}
                return [err,null,("No Follow"+(ErsOrIng?"ers":"ing"))]
            }
            else
                return [null,result.rows,"Successfully fetched all Follows"]
            
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data"]
        }
};
