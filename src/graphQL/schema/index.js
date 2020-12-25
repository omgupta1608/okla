const { gql } = require('apollo-server-express');
const { readFileSync } = require('fs'),
    path = require('path');

const stitchSchema = () => {
    return new Promise((resolve, reject) => {
        const schema = gql`
            ${readFileSync(path.join(__dirname, '/user.gql')).toString()}
            ${readFileSync(path.join(__dirname, '/airport.gql')).toString()}
            ${readFileSync(path.join(__dirname, '/response.gql')).toString()}
            ${readFileSync(path.join(__dirname, '/trip.gql')).toString()}
            ${readFileSync(path.join(__dirname, '/flight.gql')).toString()}
            type Query
            type Mutation
        `;
        resolve(schema);
    });
}

module.exports = stitchSchema;