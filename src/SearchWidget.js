import React, { Component } from 'react';
import Calender from './Calender';
import DateComponent from './Date';
import TravellerNClass from './TnC';

class SearchWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalender: false,
      field: '',
      bookingData: {
        source: { code: 'BOM', location: 'Mumbai, IND', airport: 'CSI AIrport' },
        destination: { code: 'DEL', location: 'NewDelhi, IND', airport: 'IGI AIrport' },
        departureDate: new Date(),
        returnDate: new Date(),
        adults: 2,
        children: 2,
        infants: 2,
        flightClass: 'EC'
      }
    }
    this.switchLocation = this.switchLocation.bind(this);
    this.showCalender = this.showCalender.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  showCalender(value, field) {
    this.setState({ showCalender: value, field: field });
  }
  updateState(field, value) {
    let data = Object.assign({}, this.state.bookingData);
    data[field] = value;
    this.setState({ bookingData: data });
  }
  switchLocation() {
    let data = Object.assign({}, this.state.bookingData);
    let temp = {};
    temp = data.source;
    data.source = data.destination;
    data.destination = temp;
    this.setState({ bookingData: data });
  }
  render() {

    const { source, destination, departureDate, returnDate } = this.state.bookingData;
    return (
      <div>
        {this.state.showCalender === false ?
          <div>
            <h3 className="search-widget-heading">
              SEARCH WIDGET 
           </h3>
           <hr className="full-hr"></hr>
            <div className="row d-flex">
              <div className="info-cell d-flex">
                <span className="heading-blue">From</span>
                <strong>{source.code}</strong>
                <small>{source.location}</small>
                <small className="ltext">{source.airport}</small>
              </div>
              <div className="info-cell d-flex border-circle">
                <button className="round-button">
                  <picture>
                    <source media="(min-width: 650px)" srcSet="icons/roundtrip@3x.png" />
                    <source media="(min-width: 465px)" srcSet="icons/roundtrip@2x.png" />
                    <img src="icons/roundtrip.png" alt="roundtrip" onClick={this.switchLocation} />
                  </picture>
                </button>
              </div>
              <div className="info-cell d-flex">
                <span className="heading-blue">To</span>
                <strong>{destination.code}</strong>
                <small>{destination.location}</small>
                <small className="ltext">{destination.airport}</small>
              </div>
            </div>
            <div className="travel-schedule row flex-space-beetween d-flex">
              <DateComponent heading={'DEPARTURE'} date={departureDate} showCalender={() => this.showCalender(true, "departureDate")} />
              <DateComponent heading={'RETURN'} date={returnDate} showCalender={() => this.showCalender(true, "returnDate")} />
            </div>
            <TravellerNClass bookingData={this.state.bookingData} updateState={this.updateState}/>
            <hr className="bottom-hr"></hr>
            <div className="search d-flex justify-center">
              <button className="btn info" onClick={()=>{alert(JSON.stringify(this.state.bookingData,null,2))}}><span>SEARCH</span></button>
            </div>
          </div>
          :
          <Calender showCalender={this.showCalender} updateState={this.updateState}
            from={this.state.bookingData.departureDate} to={this.state.bookingData.returnDate} field={this.state.field}
            selectedDays={this.state.bookingData[this.state.field]} />
        }
      </div>
    );
  }
}

export default SearchWidget;