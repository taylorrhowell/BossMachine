const express = require('express');
const minionsRouter = express.Router();

//Require in all necessary functions from db
const { getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, addToDatabase, deleteFromDatabasebyId } = require('./db');


//GET /api/minions to get an array of all minions.
minionsRouter.get('/', (req, res, next) => {
    const minions = getAllFromDatabase('minions');
    res.status(200).send(minions);
});

//POST /api/minions to create a new minion and save it to the database.
minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});
//Parameter check for minionId
minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
        req.minion = minion;
        next();
    } else {
        res.status(404).send();
    }
});
//GET /api/minions/:minionId to get a single minion by id.
minionsRouter.get('/:minionId', (req, res, next) => {
    res.status(200).send(req.minion);
});

//PUT /api/minions/:minionId to update a single minion by id.
minionsRouter.put('/:minionId', (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body);
    res.status(200).send(updatedMinion);
});

//DELETE /api/minions/:minionId to delete a single minion by id. 
minionsRouter.delete('/:minionId', (req, res, next) => {
    deleteFromDatabasebyId('minions', req.minion.id);
    res.status(204).send();
});
/* BONUS: /api/minions/:minionId/work routes
GET /api/minions/:minionId/work
- returns an array
- returns an array of all all work for the specified minion
- called with a non-numeric minion ID returns a 404 error
- called with an invalid ID minion returns a 404 error */
minionsRouter.get('/:minionId/work', (req, res, next) => {
    //Array of work objects for every minion
    const allWork = getAllFromDatabase('work');
    const minionWork = [];
    allWork.forEach((work) => {
        if (work.minionId === req.minion.id) {
            minionWork.push(work);
        };
    });
    res.status(200).send(minionWork);
});

/* PUT /api/minions/:minionId/work/:workId
- updates the correct work and returns it
- updates the correct work item and persists to the database
- called with a non-numeric minion ID returns a 404 error
- called with an invalid minion ID returns a 404 error
- called with a non-numeric work ID returns a 404 error
- called with an invalid work ID returns a 404 error
- called with an invalid ID does not change the database array
- returns a 400 if a work ID with the wrong :minionId is requested */


/* POST /api/minions/:minionId/work
- should add a new work item if all supplied information is correct */

/* DELETE /api/minions/:minionId/work/:workId
- deletes the correct work by id
- called with a non-numeric minion ID returns a 404 error
- called with an invalid minion ID returns a 404 error
- called with a non-numeric work ID returns a 404 error
- called with an invalid work ID returns a 404 error */
module.exports = minionsRouter;