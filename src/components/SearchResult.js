import React, { Component } from 'react';

class SearchResult extends Component {
    render() {
        const deliveriesList = this.props.deliveries.map((delivery) => {
            return (
                <div className="SearchResults" key={delivery.id}>
                    <div className="container">
                        <table style={{ width: "100%", marginTop: "25px", borderColor: "lightgray" }}>
                            <tbody>
                            <tr>
                                <td rowSpan="3"><i className="fa fa-3x fa-check-circle" style={{color: "orange"}}></i></td>
                                <td rowSpan="3" className="small font-weight-light">{delivery.date}</td>
                                <td rowSpan="3"><i className="fa fa-2x fa-location-arrow" style={{color: "lightgray"}}></i></td>
                                <td className="font-weight-bold">{delivery.origin}</td>
                                <td rowSpan="3"><i className="fa fa-3x fa-truck" style={{color: "gray"}}></i></td>
                                <td rowSpan="3" className="large font-italic">{delivery.cost}</td>
                                <td rowSpan="3"><i className="fa fa-3x fa-sticky-note" style={{color: "purple"}}></i></td>
                                <td rowSpan="3"><i className="fa fa-3x fa-ellipsis-v" style={{color: "gray"}}></i></td>
                            </tr >
                            <tr>
                                <td className="small"><i className="fa fa-chevron-down" style={{color: "orange"}}></i></td>
                            </tr>
                            <tr>
                                <td className="font-weight-bold">{delivery.destination}</td>
                            </tr>
                            </tbody>
                        </table >
                        <hr/>
                        <p className="mt-2 small" ><b>Status: </b>{delivery.status}</p>
                    </div >
                </div>
            );
        })


        return (
            <div>{deliveriesList}</div>
        );
    }
}

export default SearchResult;
