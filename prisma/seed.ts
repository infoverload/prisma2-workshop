import Photon from '@generated/photon'

const photon = new Photon()

async function main() {
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
      //genre: { genre1 }
    },
  })

  console.log({ album1, artist1})
}

main()
  .catch(e => console.error(e))