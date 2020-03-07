const mongoose = require('mongoose');

const BannerSchema = mongoose.Schema({
    title: String,
    img: String
},
    { timestamp: true }
);

module.exports = mongoose.model('Banner', BannerSchema);