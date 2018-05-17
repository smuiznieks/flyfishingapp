import axios from 'axios';

export default {

    getWeather: function(req, res) {
        return axios.get('/api/weather');
    },

    getRiverData: function(req, res) {
        return axios.get('/api/river');
    },

    getGageData: function(req, res) {
        return axios.get('/api/gage');
    },

}