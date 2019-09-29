import React from 'react'

import "./ProgressBar.css"

const ProgressBar = ({ progress }) => (
  <div className="my-progress-bar">
    <div className="my-progress" style={{ transform: `scaleX(${ progress / 100 })` }} />
  </div>
)

export default ProgressBar
