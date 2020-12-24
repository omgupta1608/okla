const { gql } = require('apollo-server-express');
const { importTypes } = require('../../utils/middlewares');

const stitchSchema = () => {
    return new Promise((resolve, reject) => {
        const schema = gql`
            ${importTypes('/schema/airport.gql')}
            ${importTypes('/schema/flight.gql')}
            ${importTypes('/schema/user.gql')}
            ${importTypes('/schema/trip.gql')}
            type Query
        `;
        resolve(schema);
    });
}

module.exports = stitchSchema;