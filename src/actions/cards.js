import {
  SET_CARD_CURRENT_WORKFLOW,
  SET_CARD_LIST,
  SET_CARD_PERCENTAGE,
} from 'constants/index'

export const setCardList = cards => ({
  type: SET_CARD_LIST,
  cards,
})

export const setCardPercentage = (cardTitle, percentage) => ({
  type: SET_CARD_PERCENTAGE,
  cardTitle,
  percentage,
})

export const setCardWorkflow = (cardTitle, workflow) => ({
  type: SET_CARD_CURRENT_WORKFLOW,
  cardTitle, 
  workflow,
})

export const transitionCardDispatch = dispatch => cardTitle => {
  dispatch(setCardWorkflow(cardTitle, 'pending'))

  dispatch(setCardPercentage(cardTitle, 5 + Math.random() * 15))

  setTimeout(() => {
    dispatch(setCardPercentage(cardTitle, 50 + Math.random() * 25))
    setTimeout(() => {
      dispatch(setCardPercentage(cardTitle, 100))
      setTimeout(() => {
        dispatch(setCardWorkflow(cardTitle, Math.random() * 2 >= 0.5
          ? 'active'
          : 'declined'
        ))
      }, 1000)
    }, 2000)
  }, 2000)


}
