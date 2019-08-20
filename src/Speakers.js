import React, { useState, useEffect, useContext, useReducer, useCallback} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "../src/Header";
import { Menu } from "../src/Menu";
import SpeakerData from "./SpeakerData";
import SpeakerDetail from "./SpeakerDetail";
import speakersReducer from "./speakersReducer";
import {ConfigContext} from './App.js'

const Speakers = ({}) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  //const [speakerList, setSpeakerList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function speakersReducer(state, action){
    function updateFavorite(favoriteValue) {
      return state.map((item, index) => {
        if (item.id === action.sessionId) {
          item.favorite = favoriteValue
          return item;
        }
        return item;
      })
    }
    switch(action.type) {
      case 'setSpeakerList': {
        return action.data;
      }
      case 'favorite': {
        updateFavorite(true)
      }
      case 'unfavoritre': {
        updateFavorite(false)
      }
      default: 
      return state;
    }
  }
  
  const [speakerList, dispatch] = useReducer(speakersReducer, []);
  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(true);
    new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
        return (speakingSaturday && sat) || (speakingSunday && sun);
      });
      //setSpeakerList(speakerListServerFilter);
      dispatch({
        type: 'setSpeakerList',
        data:speakerListServerFilter
      })
    });
    return () => {
      console.log("cleanup");
    };
  }, []); // [speakingSunday, speakingSaturday]);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const speakerListFiltered = isLoading
    ? []
    : speakerList
        .filter(
          ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
        )
        .sort(function(a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        });

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const heartFavoriteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
    dispatch({
      type:favoriteValue === true? 'favorite' : 'unfavorite',
      sessionId
    })
    // setSpeakerList(speakerList.map(item => {
    //   if (item.id === sessionId) {
    //     item.favorite = favoriteValue;
    //     return item;
    //   }
    //   return item;
    // }));
    //console.log("changing session favorte to " + favoriteValue);
  }, []);

  if (isLoading) return <div>Loading...</div>;


  //synchronous callback, (as it is executed immediately)
  function greeting(name) {
    alert('hello ' + name)
  }

  function p(callback) {
    const name = prompt('please enter name')
    callback(name)
  }

  p(greeting)

  //callback
function doHomeWork (subject, callback) {
  alert(`starting my ${subject} homework.`);
  callback();
}

doHomeWork('math', ()=>{alert('finished my homework')});



  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
      {context.names.map(name => name)}
      {context.speaker}
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
        { context.showSpeakerSpeakingDays === false? null : (
          <div className="hide">
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSaturday}
                  checked={speakingSaturday}
                />
                Saturday Speakers
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSunday}
                  checked={speakingSunday}
                />
                Sunday Speakers
              </label>
            </div>
          </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(
              ({ id, firstName, lastName, bio, favorite }) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;