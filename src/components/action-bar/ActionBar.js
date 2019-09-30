import React from 'react'

import './ActionBar.css'

const ActionBar = ({
  children,
}) => (
  <header className="action-bar">
    <div className="content">
      {children}
    </div>
  </header>
)

export default ActionBar
