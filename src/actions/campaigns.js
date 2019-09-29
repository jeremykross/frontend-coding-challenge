import { SET_CAMPAIGN_LIST, SET_CURRENT_CAMPAIGN } from 'constants/index'

export const setCampaignList = campaigns => ({
  type: SET_CAMPAIGN_LIST,
  campaigns,
})

export const setCurrentCampaign = campaign => ({
  type: SET_CURRENT_CAMPAIGN,
  campaign,
})
