const getAllFlights = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        resolve('GET ALL FLIGHTS');
    });
}

const getFlightByNumber = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        resolve('GET FLIGHT NUMBER - ' + args.Number);
    });
}

module.exports = {
    flightQueries: {
        getAllFlights,
        getFlightByNumber
    }
}