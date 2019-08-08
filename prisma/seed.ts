import Photon from '@generated/photon'
//import * as path from "path"

// const photon = new Photon({
//   __internal: {
//     engine: {binaryPath:"../binary"}
//   }
// })

// const photon = new Photon({
//   __internal: {
//     engine: {
//       binaryPath: path.join(__dirname, './binary'),
//     },
//   },
// })

const photon = new Photon()

async function main() {
  const genre1 = await photon.genres.create({
    data: {
      name: 'rock',
    },
  })
  const artist1 = await photon.artists.create({
    data: {
      name: 'Beatles',
    },
  })
  const album1 = await photon.albums.create({
    data: {
      name: 'Yellow Submarine',
      releaseYear: 1980,
      rating: 5,
      artist: {
        connect: {
          id: artist1.id
        }
      },
      genre: {
        connect: {
          id: genre1.id,
        },
      },
    },
  })
  const playlist1 = await photon.playlists.create({
    data: {
      album: {
        connect: {
          id: album1.id,
        },
      },
      name: 'Party tunes',
      public: true,
    },
  })

  console.log({genre1, playlist1, album1, artist1})
}

main()
 .then(_ => photon.disconnect())
 .catch(e => console.error(e))