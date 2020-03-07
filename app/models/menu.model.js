const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({},
    { timestamp: true }
);

module.exports = mongoose.model('Menu', MenuSchema);