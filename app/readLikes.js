var pgsql = require('../lib/pgsql')

exports.getLikesbyID = async (req) => { 
        var ID = req.body.ID ;
        console.log(Follower,Following);
        qname1='select "IdentityUUID" from "Like" where "ID"=$1'  
        qarg=[ID]
        try{
            result =await pgsql.conquery(qname1,qarg)
            if(result.rowCount === 0)
            {
            data = {"LikeCount":0,"LikeList":[]}
            return {'err':null,'data':data,'msg':"Successfully checked for Likes"}
            }
            else
            {
                data = {"LikeCount":result.rowCount,"LikeList":[result.rows]}
                return {'err':null,'data':data,'msg':"Successfully checked for Likes"}
            }
        }
        catch(err)
        {
            return {'err':err,'data':null,'msg':"Error checking for likes"}
        }
};
exports.getLikesbyIdentity = async (req) => {

    var IdentityUUID = req.body.IdentityUUID ;
    var qname = 'select "ID" from "Like" where "IdentityUUID" =$1'
    var qarg = [IdentityUUID]
	try{
            result =await pgsql.conquery(qname,qarg)
            if (result.rowCount==0)
            {
                data = {'err':"No Likes for IdentityUUID"}
                return {'err':null,'data':data,'msg':"Successfully checked for Likes"}
            }
            else
            {
                return {'err':null,'data':result.rows,'msg':"Successfully checked for Likes"}
            }
            
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data"]
        }
};
