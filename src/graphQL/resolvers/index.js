const { airportQueries } = require('./airport'),
    { flightQueries } = require('./flight'),
    { userQueries, userMutations } = require('./user'),
    { tripQueries, tripMutations } = require('./trip');

module.exports = {
    Query: {
        ...airportQueries,
        ...flightQueries,
        ...userQueries,
        ...tripQueries
    },
    Mutation: {
        ...userMutations,
        ...tripMutations
    }
}