This is a project to test caching behavior on next.js. 

## Getting Started

Install npm packages

```
yarn
```

Run the API server

```bash
node server/server.js
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000/static/dog](http://localhost:3000/static/dog) with your browser to see the result.

To Test caching behavior, build for production:

```
yarn build
yarn start
```

Then open http://localhost:3000/static/dog, http://localhost:3000/serverside/dog, or http://localhost:3000/static/fish
