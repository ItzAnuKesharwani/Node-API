var express = require('express');
var router = express.Router();

const apiRouter = require('./api.routes');
//Login super & other
router.get('/', function (req, res) {
   res.send('Welcome')
});



/*------------------------------api routing-----------------------*/
router.use('/api',apiRouter);
/*------------------------------End api routing-------------------*/

module.exports = router;