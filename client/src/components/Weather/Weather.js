import React, {Component, Fragment} from 'react';
import API from '../../utils/API';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Weather extends Component {
    state = {
        sunrise: '',
        sunset: '',
        humidity: '',
        pressure: '',
        rising: '',
        visibility: '',
        updated: '',
        currentTemp: '',
        current: '',
        forecast: null,
        windChill: '',
        windDirection: '',
        windSpeed: ''
    };

    loadWeather() {
        API.getWeather()
        .then(res => this.setState({ 
            sunrise: res.data.channel.astronomy.sunrise,
            sunset: res.data.channel.astronomy.sunset,
            humidity:   res.data.channel.atmosphere.humidity,
            pressure: res.data.channel.atmosphere.pressure,
            rising: res.data.channel.atmosphere.rising,
            visibility: res.data.channel.atmosphere.visibility,
            updated: res.data.channel.item.pubDate,
            currentTemp: res.data.channel.item.condition.temp,
            current: res.data.channel.item.condition.text,
            forecast: res.data.channel.item.forecast,
            windChill: res.data.channel.wind.chill,
            windDirection: res.data.channel.wind.direction,
            windSpeed: res.data.channel.wind.speed
        }))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.loadWeather();
    }

    renderWeather() { 
        return (
            <Card>
                <CardBody>
                    <CardTitle>Current Weather</CardTitle>
                    <CardSubtitle id="current-subtitle">
                        {this.state.current}, {this.state.currentTemp} degrees
                    </CardSubtitle>
                    <CardText>
                        Sunrise: {this.state.sunrise}<br />
                        Sunset: {this.state.sunset}<br />
                        Humidity: {this.state.humidity}%<br />
                        {/* Pressure: {this.state.pressure} in<br /> */}
                        {/* Rising: {this.state.rising}<br /> */}
                        Visibility: {this.state.visibility} miles<br />
                        Wind Chill: {this.state.windChill}°<br />
                        Wind Direction: {this.state.windDirection}<br />
                        Wind Speed: {this.state.windSpeed} mph<br />
                        <span className="updated"><br />Updated: {this.state.updated}</span>
                    </CardText>
                </CardBody>
            </Card>
        )
    }

    render() {
        return (
            <Fragment>
                {this.renderWeather()}
            </Fragment>
        )
    }
}

export default Weather;