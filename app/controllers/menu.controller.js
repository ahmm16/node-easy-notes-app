const menu = require('../models/menu.model.js');

// Retrieve and return all menu from the database.
exports.find = (req, res) => {
    menu.find()
        .then(item => {
            res.send(item);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving menu."
            });
        });
};
