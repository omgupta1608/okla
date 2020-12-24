const getTripById = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        resolve(`TRIP FETCHED ID - ${args.ID}`);
    });
}

const getAllTrips = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        resolve(`TRIPS FETCHED`);
    });
}

const getUserTrips = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        resolve(`TRIP FETCHED OF USER - ${args.userid}`);
    });
}

module.exports = {
    tripQueries: {
        getAllTrips,
        getTripById,
        getUserTrips
    }
}