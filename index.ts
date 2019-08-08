import Photon from '@generated/photon'
import * as bodyParser from 'body-parser'
import * as express from 'express'

const photon = new Photon({ debug: true })
const app = express()

app.use(bodyParser.json())

app.get('/playlists', async (req, res) => {
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