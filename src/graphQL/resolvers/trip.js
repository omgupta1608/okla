const { tripModel, userModel, flightModel } = require('../../models'),
    { ApolloError } = require('apollo-server-express'),
    { Op } = require('sequelize'),
    helpers = {
        checkUserBalance: (uId, fId, cls) => {
            return new Promise((resolve, reject) => {
                userModel.findOne({
                    attributes: ['balance'],
                    where: {
                        uId: {
                            [Op.eq]: uId
                        }
                    }
                }).then(user => {
                    flightModel.findOne({
                        attributes: ['economyPrice', 'firstClassPrice', 'businessClassPrice'],
                        where: {
                            fId: {
                                [Op.eq]: fId
                            }
                        }
                    }).then(flight => {
                        Object.keys(flight).forEach(Cls => {
                            if (Cls === cls) {
                                if (user.balance >= flight.Cls){
                                    resolve(true);
                                }else{
                                    resolve(false);
                                }
                            }
                        });
                    }).catch(error => {
                        reject(new ApolloError(error));
                    });
                }).catch(error => {
                    reject(new ApolloError(error));
                });
            });
        },
        genTripId: (uId, fId) => {
            return `T${uId.substr(uId.length, -4)}${fId.substr(fId.length, -4)}}`;
        },
        genSeatNo: (fId, uId) => {
            return `S${fId.substr(fId.length, -2)}${uId.substr(uId.length, -2)}`;
        }
    };

const getTripById = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        tripModel.findOne({
            where: {
                tId: {
                    [Op.eq]: args.ID
                }
            }
        }).then(data => {
            if (data instanceof tripModel) {
                resolve(data);
            } else {
                reject(new ApolloError('Invalid Type'));
            }
        }).catch(error => {
            reject(new ApolloError(error))
        });
    });
}

const getAllTrips = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        tripModel.findAll().then(data => {
            resolve(data);
        }).catch(error => {
            reject(new ApolloError(error));
        });
    });
}

const getUserTrips = (parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        tripModel.findAll({
            where: {
                uId: {
                    [Op.eq]: args.uId
                }
            }
        }).then(data => {
            resolve(data);
        }).catch(error => {
            reject(new ApolloError(error));
        });
    });
}

const bookTrip = (parent, args, context, info) => {
    return new Promise(async (resolve, reject) => {
        let input = args.info;
        if(await helpers.checkUserBalance(input.uId, input.fId, input.class)){
            tripModel.create({
                tId: helpers.genTripId(input.uId, input.fId),
                uId: input.uId,
                fId: input.fId,
                mealOption: input.mealOption,
                class: input.class,
                seatNo: helpers.genSeatNo(input.fId)
            }).then(data => {
                resolve({
                    message: "Trip Booked Successfully!",
                    tId: data.tId
                });
            }).catch(error => {
                reject(new ApolloError(error));
            });
        }else{
            resolve({
                message: "Insufficient Balance",
                tId: null
            });
        }
    });
}

module.exports = {
    tripQueries: {
        getAllTrips,
        getTripById,
        getUserTrips
    },
    tripMutations: {
        bookTrip
    }
}