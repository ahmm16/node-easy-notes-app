module.exports = (app) => {
    const menu = require('../controllers/menu.controller.js');
    // Retrieve Banner
    app.get('/menu', menu.find);
}