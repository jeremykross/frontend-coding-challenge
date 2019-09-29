import { SET_CAMPAIGN_LIST, SET_CURRENT_CAMPAIGN } from 'constants/index'

const initialState = {
  campaignList: [],
  currentCampaign: 'all-campaigns',
}

const campaignsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CAMPAIGN_LIST:
      return {
        ...state,
        campaignList: action.campaigns,
      }
    case SET_CURRENT_CAMPAIGN:
      return {
        ...state,
        currentCampaign: action.campaign,
      }
    default:
      return state
  }
}

export default campaignsReducer
