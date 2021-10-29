var utils = require('../common/utils')
var readFollow = require('./readFollow');
module.exports = (app, console) => {
    
    app.post('/isFollow',async (req, res) => {
         result  = await readFollow.isFollow(req);
         utils.handleresult(res,result)
        }
    )
        
    app.post('/readAllFollows',async (req, res) => {
        result =await readFollow.readAllFollows(req);
        utils.handleresult(res,result)
        }
    )
};
