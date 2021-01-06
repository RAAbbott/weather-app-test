const request = require('request');
const chalk = require('chalk');

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/6535c0077509d1f39cebc04896d32aa1/${lat},${long}`;

    request({url, json: true}, (err, {body}) => {
        if (err) {
            const error = `${chalk.red.inverse('ERROR:')} 'Forecast services not available'`
            callback(error, undefined);
        } else if (body.error) {
            const error = `${chalk.red.inverse('ERROR:')} ${body.error}`;
            callback(error, undefined);
        } else {
            const cur = body.currently;
            const forecast = `It is currently ${cur.temperature} degrees outside, with a ${cur.precipProbability}% chance of rain`;
            callback(undefined, forecast);
        }
    });
};


module.exports = forecast;