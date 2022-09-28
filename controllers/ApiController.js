var http = require('http');
const apiController = {};

/*---------------------------apiController controller-----------------------------*/
apiController.login = function (req, res) {
    console.log(req.body);
    res.json({status: true,msg:'Mobile Number is empty',data:req.body});
}
module.exports = apiController;