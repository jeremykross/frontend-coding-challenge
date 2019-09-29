import React from 'react'

import "./ContextMenu.css"

const ContextMenu = ({ onClick, onItemClick, isOpen, items }) => {
  return (
    <div
      className={`context-menu ${ isOpen ? 'open' : '' }`}
      onClick={onClick}
    >
      <div className="glyphicon glyphicon-pencil" />
      {isOpen && (
        <div className="menu">
          {items.map(item => (
            <div
              className={`item ${ item.disabled ? 'disabled' : '' }`}
              onClick={() =>
                onItemClick && onItemClick(item)
              }
            >
              <span className={`glyphicon ${ item.icon }`} />
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


export default ContextMenu

