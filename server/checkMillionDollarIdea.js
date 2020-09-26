//You will create a custom middleware function checkMillionDollarIdea that will come in handy in some /api/ideas routes. Write this function in the server/checkMillionDollarIdea.js file. This function will make sure that any new or updated ideas are still worth at least one million dollars! The total value of an idea is the product of its numWeeks and weeklyRevenue properties.

const checkMillionDollarIdea = (req, res, next) => {
    const numWeeks = req.body.numWeeks;
    const weeklyRevenue = req.body.weeklyRevenue;
    const product = numWeeks * weeklyRevenue;
    if (product >= 1000000) {
        next();
    } else {
        res.status(400).send();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
