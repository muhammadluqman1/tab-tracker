const {Song} = require('../models')
const { Op } = require("sequelize");
module.exports = {
  async index (req, res) {
    try {
      let songs = null
      const search = req.query.search
      if (search) {
        songs = await Song.findAll({
          where: {
            [Op.or]: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))

            // [Op.like]: [
            //   { title: `Float On` },
            //   { artist: `The Floaters` }
            // ]
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to fetch the songs${err}`
      })
    }
  }, 
  async show (req, res) {
    try {
        const song = await Song.findByPk(req.params.songId)
        console.log(song)
        res.send(song)
    } catch (err) {
        res.status(400).send({
        error: `An error has occured trying to fetch the songs.${err}`
        })
    }
  }, 
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the songs.'
      })
    }
  },
  async put (req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the song'
      })
    }
  }
}