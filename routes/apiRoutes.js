const express = require('express');
const axios = require('axios');
const router = express.Router();

// Consumer Key
const clientID = 'dj0yJmk9Zzl5V3I1VWZGajByJmQ9WVdrOWVsSjNjMmhHTlRJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD05MA--';
// Consumer Secret
const clientSecret = 'd04cea2bf10c926eaa1739cb277b078469517a9d';
// Cuyahoga County, OH
const WOEID = '2483750';


// API Routes

router.get('/weather', (req, res) => {
    axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid=2483750&format=json')
    .then(weather => res.json(weather.data.query.results))
    .catch(err => res.status(422).json(err))
})

router.get('/river', (req, res) => {
    axios.get('https://waterservices.usgs.gov/nwis/dv/?site=04201500&format=json&parameterCd=00010,00060&period=P7D')
    .then(river => res.json(river.data))
    .catch(err => res.status(422).json(err))
})

router.get('/gage', (req, res) => {
    axios.get('https://waterservices.usgs.gov/nwis/dv/?site=04201500&format=json&parameterCd=00065&period=P7D')
    .then(gage => res.json(gage.data))
    .catch(err => res.status(422).json(err))
})

module.exports = router;