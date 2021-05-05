import React from 'react';

//Components
import Slider from '../../components/Slide/Slider'
import Body from '../../components/Body/Body'
import Banner from '../../components/Banner/Banner'
import SimpleTabs from '../../components/Employ_tab/Tab'
import Bot from '../../components/Chat_bot/Chat_bot'
import JobTabs from "../../components/Jobs_tab/Jobs_tab"



class Home extends React.Component {
  render() {
    return (
      <div>
       <div>
          <Slider />
        </div>

        <div>
          <Body/>
        </div>
        
        <div>
          <Banner />
        </div>

        <div style={{ marginTop: 5 }}>
          <SimpleTabs />
        </div>

        <div style={{ marginTop: 10 }}>
          <JobTabs />
        </div>

        <div>
          <Bot />
        </div>
      </div>
    );
  }
}

export default Home;