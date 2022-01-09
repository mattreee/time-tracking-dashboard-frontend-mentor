import ProfilePic from '../images/image-jeremy.png';
import ThreeDots from '../images/icon-ellipsis.svg';
import React, { useState } from 'react'

const Dashboard = () => {
  const [hoursData, setHoursData] = useState({});

  function fetchData(func) {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setHoursData( func(data) ));
  }

  function updateDaily(data) {
    return {
      "work_current": data[0].timeframes.daily.current,
      "work_previous": data[0].timeframes.daily.previous,

      "play_current": data[1].timeframes.daily.current,
      "play_previous": data[1].timeframes.daily.previous,

      "study_current": data[2].timeframes.daily.current,
      "study_previous": data[2].timeframes.daily.previous,

      "exercise_current": data[3].timeframes.daily.current,
      "exercise_previous": data[3].timeframes.daily.previous,

      "social_current": data[4].timeframes.daily.current,
      "social_previous": data[4].timeframes.daily.previous,

      "care_current": data[5].timeframes.daily.current,
      "care_previous": data[5].timeframes.daily.previous
    };
  }

  function updateWeekly(data) {
    return {
      "work_current": data[0].timeframes.weekly.current,
      "work_previous": data[0].timeframes.weekly.previous,

      "play_current": data[1].timeframes.weekly.current,
      "play_previous": data[1].timeframes.weekly.previous,

      "study_current": data[2].timeframes.weekly.current,
      "study_previous": data[2].timeframes.weekly.previous,

      "exercise_current": data[3].timeframes.weekly.current,
      "exercise_previous": data[3].timeframes.weekly.previous,

      "social_current": data[4].timeframes.weekly.current,
      "social_previous": data[4].timeframes.weekly.previous,

      "care_current": data[5].timeframes.weekly.current,
      "care_previous": data[5].timeframes.weekly.previous
    };
  }

  function updateMonthly(data) {
    return {
      "work_current": data[0].timeframes.monthly.current,
      "work_previous": data[0].timeframes.monthly.previous,

      "play_current": data[1].timeframes.monthly.current,
      "play_previous": data[1].timeframes.monthly.previous,

      "study_current": data[2].timeframes.monthly.current,
      "study_previous": data[2].timeframes.monthly.previous,

      "exercise_current": data[3].timeframes.monthly.current,
      "exercise_previous": data[3].timeframes.monthly.previous,

      "social_current": data[4].timeframes.monthly.current,
      "social_previous": data[4].timeframes.monthly.previous,

      "care_current": data[5].timeframes.monthly.current,
      "care_previous": data[5].timeframes.monthly.previous
    }
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
          <Button buttonName="Daily" funcName={() => fetchData(updateDaily)} />
          <Button buttonName="Weekly" funcName={() => fetchData(updateWeekly)} />
          <Button buttonName="Monthly" funcName={() => fetchData(updateMonthly)} />
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
