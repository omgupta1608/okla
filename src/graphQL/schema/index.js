const { gql } = require('apollo-server-express');
const { importTypes } = require('../../utils/middlewares');

const stitchSchema = () => {
    return new Promise((resolve, reject) => {
        const schema = gql`
            ${importTypes('/schema/airport.gql')}
            type Query{
                test: String
            }
        `;
        resolve(schema);
    });
}

module.exports = stitchSchema;