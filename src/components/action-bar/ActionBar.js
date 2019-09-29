import React from 'react'

import './ActionBar.css'

const ActionBar = ({
  children,
}) => (
  <header className="action-bar">
    <section className="content">
      {children}
    </section>
  </header>
)

export default ActionBar
