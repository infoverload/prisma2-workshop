# Prisma 2 Workshop

This is a workshop that explores [Prisma 2](https://www.prisma.io/) tooling.

It uses [Lift](https://lift.prisma.io) for database migrations and [Photon JS](https://photonjs.prisma.io) for database access.

## How to use

### 1. Download files & install dependencies

Clone the repository:

```sh
git clone git@github.com:infoverload/prisma2-workshop.git
```

Install Node dependencies:

```sh
cd prisma2-workshop
npm install
```

### 2. Install the Prisma 2 CLI

To run the example, you need the [Prisma 2 CLI](https://github.com/prisma/prisma2/blob/master/docs/prisma-2-cli.md):

```sh
npm install -g prisma2
```

### 3. Set up database

This project uses SQLite as a database.

Then migrate your database with [Lift](https://lift.prisma.io) by running:

```sh
prisma2 lift save --name 'init'
prisma2 lift up
```

### 4. Generate Photon (type-safe database client)

Run the following command to generate [Photon JS](https://photonjs.prisma.io/):

```sh
prisma2 generate
```

Now you can seed your database using the `seed` script from `package.json`:

```sh
npm run seed
```

### 5. Start the express server

```sh
npm run start
```

The server is now running on `localhost:3000`.


## Debugging

This is still a work in progress. If you run into problems, turn on debugging by setting:

```sh
export DEBUG=*
```

I am always happy to accept pull requests. :)

## Next steps

- Read the [Prisma 2 announcement](https://www.prisma.io/blog/announcing-prisma-2-zq1s745db8i5/)
- Check out the [Prisma 2 docs](https://github.com/prisma/prisma2)
- Share your feedback in the [`prisma2-preview`](https://prisma.slack.com/messages/CKQTGR6T0/) channel on the Prisma Slack
