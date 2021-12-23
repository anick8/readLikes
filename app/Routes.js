var utils = require('../common/utils')
var readLikes = require('./readLikes');
module.exports = (app, console) => {
    
    app.post('/getLikesbyID',async (req, res) => {
         result  = await readLikes.getLikesbyID(req);
         utils.handleresult(res,result)
        }
    )
        
    app.post('/getLikesbyIdentity',async (req, res) => {
        result =await readLikes.getLikesbyIdentity(req);
        utils.handleresult(res,result)
        }
    )
};
