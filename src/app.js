const express = require('express'),
    app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

app.use(cors());

app.get('/health', (req,res) => {
    res.sendStatus(200);
});

start = async () => {

    // init Graphql server
    // connect to DB

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