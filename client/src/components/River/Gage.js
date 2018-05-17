import React, {Component, Fragment} from 'react';
import API from '../../utils/API';
import { Table } from 'reactstrap';
const Timestamp = require('react-timestamp');

class Gage extends Component {
    state = {
        riverStats: null
    }

    loadRiverData() {
        API.getGageData()
        .then(res => console.log(res.data))
        // .then(res => this.setState({
        //     riverStats: res.data.value.timeSeries[3].values[0].value
        // }))
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
                        <td>{riverStat.value} ft</td>
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
                                <th>Rate</th>
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

export default Gage;