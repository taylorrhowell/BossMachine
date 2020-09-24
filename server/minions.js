const express = require('express');
const { getAllFromDatabase } = require('./db');
const minionsRouter = express.Router();

minionsRouter.get('/', (req, res, next) => {
    const minions = getAllFromDatabase('minions');
    res.status(200).send(minions);
});
/* Routes Required

/api/minions

GET /api/minions to get an array of all minions.
POST /api/minions to create a new minion and save it to the database.
GET /api/minions/:minionId to get a single minion by id.
PUT /api/minions/:minionId to update a single minion by id.
DELETE /api/minions/:minionId to delete a single minion by id. 

For all /api/minions and /api/ideas routes, any POST or PUT requests will send their new/updated resources in the request body. POST request bodies will not have an id property, you will have to set it based on the next id in sequence.*/
module.exports = minionsRouter;