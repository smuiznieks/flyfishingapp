import React, {Component, Fragment} from 'react';
import API from '../../utils/API';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './Weather.css';

class Forecast extends Component {
    state = {
        days: null
    };

    loadForecast() {
        API.getWeather()
        // .then(res => console.log(res.data.channel.item.forecast))
        .then(res => this.setState({ 
            days: res.data.channel.item.forecast
        }))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.loadForecast();
    }

    renderForecast() { 
        return (
            this.state.days.map(day => {
                return (
                    <Fragment key={day.date}>
                        <CardSubtitle>{day.day}, {day.date}</CardSubtitle>
                        <CardText>
                            {day.text}
                            <span className="high-low"><span className="forecast">{day.high}°</span> {day.low}°</span>
                        </CardText>
                    </Fragment>
                )
            })
        )
    }

    render() {
        const { days } = this.state;
        return (
            <Card>
                <CardBody>
                    <CardTitle>Forecast</CardTitle>
                    {days && days.length ? (
                        <Fragment>
                            {this.renderForecast()}
                        </Fragment>
                    ) : (
                        <h3>Loading...</h3>
                    )}
                    <img id="yahoo" src="https://poweredby.yahoo.com/purple.png" width="134" height="29" alt="Powered by Yahoo"/>
                </CardBody>
            </Card>
        )
    }
}

export default Forecast;