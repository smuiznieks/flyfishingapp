import React, {Component, Fragment} from 'react';
import API from '../../utils/API';
import { Table } from 'reactstrap';
const Timestamp = require('react-timestamp');

class Temp extends Component {
    state = {
        riverStats: null,
        fahrenheit: []
    }

    loadRiverData() {
        API.getRiverData()
        // .then(res => console.log(res.data.value.timeSeries[2].values[0].value))
        .then(res => this.setState({
            riverStats: res.data.value.timeSeries[2].values[0].value
        }))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.loadRiverData();
    }

    renderData() {
        return (
            this.state.riverStats.map(riverStat => {
                return (
                    <tr key={riverStat.dateTime}>
                        <td><Timestamp time={riverStat.dateTime} format='date' /></td>
                        <td>{((parseFloat(riverStat.value) * 1.8) + 32).toFixed(1)}° F 
                            {/* <span className="temp-C">{riverStat.value}° C</span> */}
                        </td>
                    </tr>
                )
            })
        )
    }

    render() {
        const { riverStats } = this.state;
        return (
            <Fragment>
                {riverStats && riverStats.length ? (
                    <Table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Temp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderData()}
                        </tbody>
                    </Table>
                ) : (
                    <h3>Loading...</h3>
                )}
            </Fragment>
        )
    }
}

export default Temp;