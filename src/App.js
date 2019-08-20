    
import React from "react";
import Home from "./Home";
import Speakers from "./Speakers"
import SpeakerData from './SpeakerData';

export const ConfigContext = React.createContext();

const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;
  return <div>Not Found</div>;
};

const configValue = {
    showSpeakerSpeakingDays: false,
    names: [
        'a','b','c','d','e','f','g','h','i'
    ],
    showSignMeUp: true,
    speaker: SpeakerData[0].firstName
};

const App = ({ pageName }) => {
  return (
      <ConfigContext.Provider value={configValue} >
        <div>{pageToShow(pageName)}</div>
      </ConfigContext.Provider>
  )
};

export default App;