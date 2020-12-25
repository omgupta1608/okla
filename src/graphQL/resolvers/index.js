const { airportQueries } = require('./airport'),
    { flightQueries } = require('./flight'),
    { userQueries, userMutations } = require('./user'),
    { tripQueries } = require('./trip');

module.exports = {
    Query: {
        ...airportQueries,
        ...flightQueries,
        ...userQueries,
        ...tripQueries
    },
    Mutation: {
        ...userMutations
    }
}