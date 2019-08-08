import Photon from '@generated/photon'
import * as bodyParser from 'body-parser'
import * as express from 'express'

const photon = new Photon({ debug: true })
const app = express()

app.use(bodyParser.json())


app.post(`/addGenre`, async (req, res) => {
  const { name } = req.body
  const genre = await photon.genres.create({
    data: {
      name,
    },
  })
  res.json(genre)
})

app.delete(`/deleteGenre/:id`, async (req, res) => {
  const { id } = req.params
  const post = await photon.genres.delete({
    where: {
      id,
    },
  })
  res.json(post)
})

app.get(`/getArtist/:id`, async (req, res) => {
  const { id } = req.params
  const artist = await photon.artists.findOne({
    where: {
      id,
    },
  })
  res.json(artist)
})

app.get('/getAlbums', async (req, res) => {
  const albums = await photon.albums.findMany()
  res.json(albums)
})

app.get('/filterPlaylist', async (req, res) => {
  const playlists = await photon.playlists.findMany({
    where: {
      public: true
    }
  })
  res.json(playlists)
})

const server = app.listen(3000, () =>
  console.log('Server is running on http://localhost:3000'),
)