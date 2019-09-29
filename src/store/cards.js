import { SET_CARD_LIST, SET_CARD_CURRENT_WORKFLOW, SET_CARD_PERCENTAGE } from 'constants/index'

const initialState = {
  cardList: [],
}

const updateCardWithTitle = (cards, title, fn) => cards.map(card =>
  card.cardTitle === title
    ? {...card, ...fn(card) }
    : card
)

const cardsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CARD_LIST:
      return {
        ...state,
        cardList: action.cards,
      }
    case SET_CARD_CURRENT_WORKFLOW:
      return {
        ...state,
        cardList: updateCardWithTitle(
          state.cardList,
          action.cardTitle,
          () => ({ currentWorkflow: action.workflow }),
        ),
      }
    case SET_CARD_PERCENTAGE:
      return {
        ...state,
        cardList: updateCardWithTitle(
          state.cardList,
          action.cardTitle,
          () => ({ percentage: action.percentage }),
        ),
      }
    default:
      return state
  }
}

export default cardsReducer
