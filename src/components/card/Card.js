import React, { useState } from 'react'
import { connect } from 'react-redux'

import ContextMenu from './ContextMenu'
import ProgressBar from './ProgressBar'

import {
  setCardWorkflow as setCardWorkflowActionCreator,
  transitionCardDispatch
} from 'actions/cards'

import "./Card.css"

const actionForWorkflow = workflow => {
  switch(workflow) {
    case 'saved':
      return { name: 'Publish', icon: 'glyphicon-check' }
    case 'pending':
      return  { disabled: true, name: 'Publish', icon: 'glyphicon-check' }
    case 'active':
      return { name: 'Pause', icon: 'glyphicon-pause' }
    case 'paused':
      return { name: 'Resume', icon: 'glyphicon-play' }
    default:
      return null
  }
}

const Card = ({
  cardTitle,
  currentWorkflow,
  primaryMediaUrl,
  listOfPlans,
  percentage, 
  totalRevenue,
  setCardWorkflow,
  shares,
  transitionCard,
  views,
}) => {
  const [ isContextOpen, setContextIsOpen ] = useState(false)

  const plan = (listOfPlans.length >= 1 && listOfPlans[0]) || { price: { currencySymbol: '$', amount: '0.00'}}

  return (
    <div
      className="card"
      onMouseLeave={() => setContextIsOpen(false)}
    >
      <ContextMenu
        isOpen={isContextOpen}

        items={[
          { disabled: true, name: "Edit", icon: "glyphicon-edit" },
          ...[actionForWorkflow(currentWorkflow)].filter(x => x),
          { disabled: true, name: "Share", icon: "glyphicon-share" },
          { disabled: true, name: "Delete", icon: "glyphicon-trash" },
        ]}

        onClick={() => setContextIsOpen(!isContextOpen)}

        onItemClick={item => {
          setContextIsOpen(false)
          if(item.name === 'Publish' || item.name === 'Resume') {
            transitionCard(cardTitle)
          } else if(item.name === 'Pause') {
            setCardWorkflow(cardTitle, 'paused')
          }
        }}
      />
      <img alt="a pleasant kitty" src={primaryMediaUrl} />
      <div className="content">
        <h5>{cardTitle}</h5>
        <section className="plan-info">
          <div className="price">
            {`${ plan.price.currencySymbol } ${ plan.price.amount }`} / Month
          </div>
          <div className="status">
            { currentWorkflow }
            <div className={`indicator ${ currentWorkflow }`} />
          </div>
        </section>
        <ProgressBar
          progress={currentWorkflow === 'pending' && percentage
            ? percentage
            : 0
          }
        />
      </div>

      <div className="extra-info">
        <div>
          <span className="glyphicon glyphicon-piggy-bank" />
          {totalRevenue}
        </div>
        <div>
          <span className="glyphicon glyphicon-fire" />
          {shares}
        </div>
        <div>
          <span className="glyphicon glyphicon-eye-open" />
          {views}
        </div>
      </div>
    </div>
  )
}


const dispatching = (dispatch, fn) => (...args) => dispatch(fn(...args))

export default connect(null, dispatch => ({
  setCardWorkflow: dispatching(dispatch, setCardWorkflowActionCreator),
  transitionCard: transitionCardDispatch(dispatch),
}))(Card)
