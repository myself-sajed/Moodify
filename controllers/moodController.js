const Song = require('../models/song.js')


const moodContoller = () => {
    return {
        mood(req, res) {
            res.render('mood')
        },
        async moodify(req, res) {
            const { mood } = req.body
            console.log(mood);
            const filter = { mood: mood };
            const songs = await Song.find(filter)
            res.send(songs)
        }
    }
}

module.exports = moodContoller