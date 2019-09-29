import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Selector.css'

const Selector = ({
  items,
  onItemSelected,
  selectedItemValue,
}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const selectedItem = items.find(item => item.value === selectedItemValue) || items[0] || {}

  return (
    <div
      className={`selector ${ isOpen ? 'open' : '' }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="target">
        <div className="selected">{selectedItem.name}</div>
        <div className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
      </div>
      <div
        className="drawer"
        style={{
          maxHeight: isOpen
            ? `${ items.length * 42 }px`
            : 0,
        }}
      >
        {items.map(item => (
          <div 
            className={`item ${ item.value === selectedItemValue ? 'selected' : '' }`}
            key={item.value}
            onClick={() => onItemSelected && onItemSelected(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

Selector.propTypes = {
  items: PropTypes.array,
}

Selector.defaultProps = {
  items: [{
    value: 'all-campaigns',
    name: 'All Campaigns',
    isSelected: true,
  }],
}


export default Selector
