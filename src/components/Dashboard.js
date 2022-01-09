import ProfilePic from '../images/image-jeremy.png';
import ThreeDots from '../images/icon-ellipsis.svg';
import React, { useState } from 'react'

const Dashboard = () => {
  const [hoursData, setHoursData] = useState({});

  function fetchData(func, timeframe) {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setHoursData( func(data, timeframe) ));
  }

  function updateInfo(data, timeframe) {
    return {
      "work_current": data[0].timeframes[timeframe].current,
      "work_previous": data[0].timeframes[timeframe].previous,

      "play_current": data[1].timeframes[timeframe].current,
      "play_previous": data[1].timeframes[timeframe].previous,

      "study_current": data[2].timeframes[timeframe].current,
      "study_previous": data[2].timeframes[timeframe].previous,

      "exercise_current": data[3].timeframes[timeframe].current,
      "exercise_previous": data[3].timeframes[timeframe].previous,

      "social_current": data[4].timeframes[timeframe].current,
      "social_previous": data[4].timeframes[timeframe].previous,

      "care_current": data[5].timeframes[timeframe].current,
      "care_previous": data[5].timeframes[timeframe].previous
    };
  }

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
        dataCurrent={hoursData.work_current}
        dataPrevious={hoursData.work_previous}
        cardClass="card-work"
      />

      <Card
        title="Play"
        dataCurrent={hoursData.play_current}
        dataPrevious={hoursData.play_previous}
        cardClass="card-play"
      />

      <Card
        title="Study"
        dataCurrent={hoursData.study_current}
        dataPrevious={hoursData.study_previous}
        cardClass="card-study"
      />

      <Card
        title="Exercise"
        dataCurrent={hoursData.exercise_current}
        dataPrevious={hoursData.exercise_previous}
        cardClass="card-exercise"
      />

      <Card
        title="Social"
        dataCurrent={hoursData.social_current}
        dataPrevious={hoursData.social_previous}
        cardClass="card-social"
      />

      <Card
        title="Self Care"
        dataCurrent={hoursData.care_current}
        dataPrevious={hoursData.care_previous}
        cardClass="card-social"
      />
    </div>
  )
}

const Card = ({ title, dataCurrent, dataPrevious, cardClass }) => {
  return (
    <div className={`card ${cardClass}`}>
      <div className="card__content">
        <div className="card__head">
          <h2 className='card__title'>{title}</h2>
          <img className='card__dots' src={ThreeDots} alt="" />
        </div>
        <div className="card__hours">
          <p className='card__current'>
            {
              dataCurrent === undefined
              ?'0'
              : dataCurrent + 'hrs'
            }
          </p>
          <p className='card__previous'>Previous - 
            {
              dataPrevious === undefined
              ? '0'
              : dataPrevious + 'hrs'
            }
          </p>
        </div>
      </div>
    </div>
  )
}

const Button = ({ buttonName, funcName }) => {
  return (
    <button onClick={funcName} className="profile__button">{buttonName}</button>
  )
}

export default Dashboard
