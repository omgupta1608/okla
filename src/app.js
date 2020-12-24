const express = require('express'),
    app = express(),
    { ApolloServer } = require('apollo-server-express'),
    dotenv = require('dotenv');

dotenv.config();

const cors = require('cors');

app.use(cors());

start = async () => {
    let schema = await require('./graphQL/schema')();
    let db = require('./services/database');
    db.check();
    const server = new ApolloServer({
        typeDefs: schema,
        resolvers: require('./graphQL/resolvers'),
        debug: true,
        introspection: true,
        playground: true,
        formatError: require('./utils/error').formatGQLError
    });

    server.applyMiddleware({
        app
    });

    app.get('/health', (req, res) => {
        res.sendStatus(200);
    });
    app.listen(
        { port: process.env.PORT },
        () => {
            console.log(`Okla server started successfully at ${process.env.PORT}`);
        }
    );
}

start().then(
    () => console.log('App initialized successfully')
);