const Song = require('../models/song.js')

const exploreController = () => {
    return {
        async explore(req, res) {
            const filter = {};
            const songs = await Song.find(filter);
            res.render('explore', { songs })
        }
    }
}

module.exports = exploreController