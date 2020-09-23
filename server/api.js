const express = require('express');
const apiRouter = express.Router();

/*Routes required:
/api/minions

GET /api/minions to get an array of all minions.
POST /api/minions to create a new minion and save it to the database.
GET /api/minions/:minionId to get a single minion by id.
PUT /api/minions/:minionId to update a single minion by id.
DELETE /api/minions/:minionId to delete a single minion by id.
/api/ideas

GET /api/ideas to get an array of all ideas.
POST /api/ideas to create a new idea and save it to the database.
GET /api/ideas/:ideaId to get a single idea by id.
PUT /api/ideas/:ideaId to update a single idea by id.
DELETE /api/ideas/:ideaId to delete a single idea by id.
/api/meetings

GET /api/meetings to get an array of all meetings.
POST /api/meetings to create a new meeting and save it to the database.
DELETE /api/meetings to delete all meetings from the database.
For all /api/minions and /api/ideas routes, any POST or PUT requests will send their new/updated resources in the request body. POST request bodies will not have an id property, you will have to set it based on the next id in sequence.

For /api/meetings POST route, no request body is necessary, as meetings are generated automatically by the server upon request. Use the provided createMeeting function exported from db.js to create a new meeting object. */

module.exports = apiRouter;
