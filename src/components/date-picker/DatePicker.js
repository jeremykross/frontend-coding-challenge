import React from 'react'
import PropTypes from 'prop-types'

import "./DatePicker.css"

const DatePicker = ({
  interval
}) => (
  <div className="date-picker">
    <div className="arrow left">&lt;</div>
    <div className="date">
      <span className="glyphicon glyphicon-calendar" />Today, Jan 10th
    </div>
    <div className="arrow right">&gt;</div>

    <div className="interval">{interval === "day" ? '1d' : '1w'}</div>
  </div>
)

DatePicker.propTypes = {
  interval: PropTypes.oneOf([
    'day',
    'week',
  ]),
}

DatePicker.defaultProps = {
  interval: 'day',
}
export default DatePicker
