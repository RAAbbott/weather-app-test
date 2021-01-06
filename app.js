const forecast = require('./utils/forecast');
const map = require('./utils/map');
const location = process.argv[2];


if (!location) {
    return console.log("Please enter a location as an argument in the command line");
}

map(location, (err, {long, lat, location}) => {
    if (err) {
        return console.log(err);
    }

    forecast(long, lat, (err, forecastData) => {
        if (err) {
            return console.log(err);
        }
        
        console.log(location);
        console.log(forecastData);
    });
});
