import React, { useEffect } from 'react';
import { connect } from 'react-redux'

// components
import ActionBar from './components/action-bar'
import Card from './components/card'
import DatePicker from './components/date-picker'
import Selector from './components/selector'

// actions
import {
  setCampaignList as setCampaignListActionCreator,
  setCurrentCampaign as setCurrentCampaignActionCreator,
} from './actions/campaigns'

import {
  setCardList as setCardListActionCreator,
} from './actions/cards'

// data
import campaignData from './data/campaigns.json'
import cardData from './data/cards.json'

import './App.css';

const App = ({
  campaigns,
  cards,
  currentCampaign,
  setCampaignList,
  setCardList,
  setCurrentCampaign,
}) => {

  useEffect(() => {
    setCampaignList(campaignData)
    setCardList(cardData)
    // eslint-disable-next-line
  }, [])


  const filteredCards = currentCampaign === 'all-campaigns'
    ? cards
    : cards.filter(card => card.campaignId === currentCampaign)
  
  return (
      <div className="App">
        <ActionBar>
          <Selector
            items={[
              { 
                name: 'All Campaigns',
                value: 'all-campaigns',
              },
              ...campaigns.map(campaign => ({
                name: campaign.campaignName,
                value: campaign.id,
              }))
            ]}
            onItemSelected={item => setCurrentCampaign(item.value)}
            selectedItemValue={currentCampaign}
          />

          <div className="filter">
            <span className="glyphicon glyphicon-list" />
            Pending
          </div>
         
          <div className="tools">
            <span className="glyphicon glyphicon-search" />
            <DatePicker />
          </div>

        </ActionBar>

        <div className="content">
          <section className="cards">
            {filteredCards.map(card => (
              <Card
                key={`${ card.id }-${ card.cardTitle }`}
                {...card}
              />
            ))}
            <div className="add-card">
            </div>
          </section>
        </div>

      </div>
  )
};

export default connect(
  ({ campaigns, cards }) => ({
    campaigns: campaigns.campaignList,
    cards: cards.cardList,
    currentCampaign: campaigns.currentCampaign
  }),
  {
    setCampaignList: setCampaignListActionCreator,
    setCardList: setCardListActionCreator,
    setCurrentCampaign: setCurrentCampaignActionCreator,
  }
)(App);
