import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DateComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const { date } = this.props;
        return (
                <div className="info-cell d-flex" onClick={this.props.showCalender}>
                    <span className="ltext heading-blue" >{this.props.heading}</span>
                    <div className="d-flex justify-center align-item-center"> 
                        <strong className="schedule-date align-item-center">{date.getDate()}</strong>
                        <span className="schedule-day">
                            <span className="ltext">{days[date.getDay()]}</span>
                            <small className="schedule-year">{month[date.getMonth()]} {date.getFullYear()}</small>
                        </span>
                    </div>
                </div>
                );
              }
            }
DateComponent.propTypes = {
    date: PropTypes.instanceOf(Date)
};            
DateComponent.defaultProps = { date: new Date() };
export default DateComponent;