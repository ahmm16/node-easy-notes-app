const banner = require('../models/banner.model.js');

// Retrieve and return all banner from the database.
exports.find = (req, res) => {
    banner.find()
        .then(item => {
            res.send(item);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving banner."
            });
        });
};
