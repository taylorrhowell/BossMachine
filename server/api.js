const express = require('express');
const apiRouter = express.Router();

//Require in all nested routes
const minionsRouter = require('./minions');
const ideasRouter = require('./ideas');
const meetingsRouter = require('./meetings');

//Route respective requests to routers 
apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);

//export API
module.exports = apiRouter;