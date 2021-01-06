const request = require('request');

const map = (location, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?limit=1&access_token=pk.eyJ1IjoiYWFiYm90dDE5OTYiLCJhIjoiY2s0NG5oa3ZyMDBrMDNlbzR0Z2Uxd2FzaCJ9.RbW_WN2tx7kkJ6cZbffK-A`;

    request({url, json: true}, (err, {body}) => {
        const location = body.features[0];
        if (err) {
            callback('Error! Cannot connect to location services', undefined);
        } else if (!location) {
            callback('Error! Location not found', undefined);
        } else {
            callback(undefined, {lat: location.center[0], long: location.center[1], location: location.place_name});
        }
    });
};


module.exports = map;