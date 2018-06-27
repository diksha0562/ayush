import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import DateComponent from './Date';
import PropTypes from 'prop-types';

class Calender extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }
  handleDayClick(day) {

    this.props.updateState(this.props.field,day);
  }
  render() {
    const {from,to} =this.props;
    return (
      <div>
        <div className="travel-schedule row flex-space-beetween d-flex">
          <DateComponent heading={'DEPARTURE'} date={from}/>
          <DateComponent heading={'RETURN'} date={to}/>
        </div>
        <div className="d-flex justify-center">
        <DayPicker 
        disabledDays={
          { 
              before: new Date()
          }} 
        numberOfMonths={2} onDayClick={this.handleDayClick} selectedDays={this.props.selectedDays}/>
        </div>
        <div className="d-flex justify-center">
          <button className="done-button btn info" onClick={()=>this.props.showCalender(false,'')}>Done</button>
        </div>
      </div>
    );
  }
}
Calender.propTypes = {
  from: PropTypes.instanceOf(Date),
  to: PropTypes.instanceOf(Date),
  selectedDays: PropTypes.instanceOf(Date),
  showCalender: PropTypes.func,
  updateState: PropTypes.func
};            
export default Calender;