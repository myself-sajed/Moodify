
// Controllers
const homeContoller = require('../controllers/homeController')()
const exploreContoller = require('../controllers/exploreController')()
const moodContoller = require('../controllers/moodController')()


function initRoutes(app) {
    app.get('/', homeContoller.home)

    app.get('/explore', exploreContoller.explore)
    app.get('/mood', moodContoller.mood)
    app.post('/moodify', moodContoller.moodify)

}

module.exports = initRoutes