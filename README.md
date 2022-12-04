# Stock Ticker App

## Getting Setup

#### Server:
Create new .env file and add API_KEY

In a new terminal:
```sh
cd server
yarn
yarn start
```

to run tests:
```sh
yarn test
```

swagger endpoint: /docs

#### Client:
In a new terminal:
```sh
cd client
yarn
yarn start
```

Change the port on the client url to the one you get when you launch the client, in server/src/index.ts


### Tests:
make sure you ran yarn first
```sh
yarn cy:open
```
