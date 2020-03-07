module.exports = (app) => {
    const banner = require('../controllers/banner.controller.js');
    // Retrieve Banner
    app.get('/banner', banner.find);
}