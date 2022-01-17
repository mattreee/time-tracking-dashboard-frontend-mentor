import ProfilePic from '../images/image-jeremy.png';
import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';

const Dashboard = () => {
  const [hoursData, setHoursData] = useState();
  const [firstStateLoad, setFirstStateLoad] = useState(false);

  function fetchData(func, timeframe) {
    fetch('./data.json', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => func(data, timeframe));
  }

  const updateInfo = (data, timeframe) => {
    let dataLength = data.length;
    let obj = {};
    
    for (let i = 0; i < dataLength; i++) {
      Object.defineProperty(obj, data[i].title, {
        value: {
          "current": data[i].timeframes[timeframe].current,
          "previous": data[i].timeframes[timeframe].previous
        },
        writable: true,
        configurable: true,
        enumerable: true
      })
    }
    setHoursData(obj);
  }
  
  (function initialState() {
    if(!firstStateLoad) {
      fetchData(updateInfo, 'weekly');
      setFirstStateLoad(true);
    }
  })();

  return (
    <div className="dashboard">
      <div className="profile">
        <div className="profile__intro">
          <img src={ProfilePic} alt="" />
          <div className="profile__text">
            <p className='profile__subtitle'>Report for</p>
            <h1 className='profile__title'>Jeremy Robson</h1>
          </div>
        </div>
        <div className="profile__buttons">
          <Button buttonName="Daily" funcName={() => fetchData(updateInfo, "daily")} />
          <Button buttonName="Weekly" funcName={() => fetchData(updateInfo, "weekly")} />
          <Button buttonName="Monthly" funcName={() => fetchData(updateInfo, "monthly")} />
        </div>
      </div>

      <Card
        title="Work"
        dataCurrent={hoursData === undefined ? '0' : hoursData.Work.current}
        dataPrevious={hoursData === undefined ? '0' : hoursData.Work.previous}
        cardClass="card-work"
      />

      <Card
        title="Play"
        dataCurrent={hoursData === undefined ? '0' : hoursData.Play.current}
        dataPrevious={hoursData === undefined ? '0' : hoursData.Play.previous}
        cardClass="card-play"
      />

      <Card
        title="Study"
        dataCurrent={hoursData === undefined ? '0' : hoursData.Study.current}
        dataPrevious={hoursData === undefined ? '0' : hoursData.Study.previous}
        cardClass="card-study"
      />

      <Card
        title="Exercise"
        dataCurrent={hoursData === undefined ? '0' : hoursData.Exercise.current}
        dataPrevious={hoursData === undefined ? '0' : hoursData.Exercise.previous}
        cardClass="card-exercise"
      />

      <Card
        title="Social"
        dataCurrent={hoursData === undefined ? '0' : hoursData.Social.current}
        dataPrevious={hoursData === undefined ? '0' : hoursData.Social.previous}
        cardClass="card-social"
      />

      <Card
        title="Self Care"
        dataCurrent={hoursData === undefined ? '0' : hoursData['Self Care'].current}
        dataPrevious={hoursData === undefined ? '0' : hoursData['Self Care'].previous}
        cardClass="card-social"
      />
    </div>
  )
}

export default Dashboard