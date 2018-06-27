import React, { Component } from 'react';

class TravellerNClass extends Component {
    constructor(props) {
        super(props);  
        this.handleUpdate=this.handleUpdate.bind(this);
    }
    handleUpdate(field,value){
        this.props.updateState(field,value);
    }
    render() {
        const {flightClass, children, infants, adults} = this.props.bookingData;
        return (
            <div className="d-flex f-column justify-center flex-space-beetween">
                <h4 className="heading-blue align-text">TRAVELLERS & CLASS</h4>
                <div className="d-flex justify-center flex-space-beetween">
                    <div className="info-cell d-flex"><span className="schedule-day">
                        <div className="align-text traveller-details">
                            <div><input type="number" defaultValue={adults} className="input" min="0" max="10" onChange={(e) => { this.handleUpdate('adults', e.target.value); }} /></div>
                        </div>
                        <small className="ltext">Adults</small>
                    </span></div>
                    <div className="info-cell d-flex"><span className="schedule-day">
                        <div className="align-text traveller-details">
                            <div><input type="number" defaultValue={children} className="input" min="0" max="10" onChange={(e) => { this.handleUpdate('children', e.target.value); }} /></div>
                        </div>
                        <small className="ltext">Children</small>
                    </span>
                    </div><div className="info-cell d-flex"><span className="schedule-day">
                        <div className="align-text traveller-details">
                            <div><input type="number" defaultValue={infants} className="input" min="0" max="10" onChange={(e) => { this.handleUpdate('infants', e.target.value); }} /></div>
                        </div>
                        <small className="ltext">Infants</small>
                    </span>
                    </div><div className="info-cell d-flex"><span className="schedule-day">
                        <div className="align-text traveller-details">
                            <div><input type="text" defaultValue={flightClass} className="input upper" maxLength="3" onChange={(e) => { this.handleUpdate('flightClass',e.target.value.toString().toUpperCase()); }}></input></div>
                        </div>
                        <small className="ltext">Class</small>
                    </span></div>
                </div>
            </div>
        );
    }
}
export default TravellerNClass;