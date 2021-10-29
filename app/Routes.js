var utils = require('../common/utils')
var readFollow = require('./readFollow');
module.exports = (app, console) => {
    
    app.post('/isFollowing',async (req, res) => {
         result  = await readFollow.isFollowing(req);
         utils.handleresult(res,result)
        }
    )
        
    app.post('/readAllFollowers',async (req, res) => {
        result =await readFollow.readAllFollowers(req);
        utils.handleresult(res,result)
        }
    )
    app.post('/readAllFollowing',async (req, res) => {
        result =await readIdentity.readAllFollowing(req);
        utils.handleresult(res,result)
        }
    )
};
