const express = require('express'),
    app = express(),
    { ApolloServer } = require('apollo-server-express');

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

app.use(cors());

start = async () => {

    let schema = await require('./graphQL/schema')();

    const server = new ApolloServer({
        typeDefs: schema,
        debug: true,
        introspection: true,
        playground: true
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