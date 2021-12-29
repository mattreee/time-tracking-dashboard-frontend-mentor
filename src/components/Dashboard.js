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
          <button onClick={() => fetchData(updateDaily)} className="profile__button">Daily</button>
          <button onClick={() => fetchData(updateWeekly)} className="profile__button">Weekly</button>
          <button onClick={() => fetchData(updateMonthly)} className="profile__button">Monthly</button>
        </div>
      </div>

      <div className="card card-work">
        <div className="card__content">
          <div className="card__head">
            <h2 className='card__title'>Work</h2>
            <img className='card__dots' src={ThreeDots} alt="" />
          </div>
          <div className="card__hours">
            <p className='card__current'>{
              hoursData.work_current === undefined
              ?'0'
              : hoursData.work_current + 'hrs'
            }</p>
            <p className='card__previous'>Previous - {
              hoursData.work_previous === undefined
              ? '0'
              : hoursData.work_previous + 'hrs'
            }</p>
          </div>
        </div>
      </div>

      <div className="card card-play">
        <div className="card__content">
          <div className="card__head">
            <h2 className='card__title'>Play</h2>
            <img className='card__dots' src={ThreeDots} alt="" />
          </div>
          <div className="card__hours">
            <p className='card__current'>{
              hoursData.play_current === undefined
              ?'0'
              : hoursData.play_current + 'hrs'
            }</p>
            <p className='card__previous'>Previous - {
              hoursData.play_previous === undefined
              ? '0'
              : hoursData.play_previous + 'hrs'
            }</p>
          </div>
        </div>
      </div>

      <div className="card card-study">
        <div className="card__content">
          <div className="card__head">
            <h2 className='card__title'>Study</h2>
            <img className='card__dots' src={ThreeDots} alt="" />
          </div>
          <div className="card__hours">
            <p className='card__current'>{
              hoursData.study_current === undefined
              ?'0'
              : hoursData.study_current + 'hrs'
            }</p>
            <p className='card__previous'>Previous - {
              hoursData.study_previous === undefined
              ? '0'
              : hoursData.study_previous + 'hrs'
            }</p>
          </div>
        </div>
      </div>

      <div className="card card-exercise">
        <div className="card__content">
          <div className="card__head">
            <h2 className='card__title'>Exercise</h2>
            <img className='card__dots' src={ThreeDots} alt="" />
          </div>
          <div className="card__hours">
            <p className='card__current'>{
              hoursData.exercise_current === undefined
              ?'0'
              : hoursData.exercise_current + 'hrs'
            }</p>
            <p className='card__previous'>Previous - {
              hoursData.exercise_previous === undefined
              ? '0'
              : hoursData.exercise_previous + 'hrs'
            }</p>
          </div>
        </div>
      </div>

      <div className="card card-social">
        <div className="card__content">
          <div className="card__head">
            <h2 className='card__title'>Social</h2>
            <img className='card__dots' src={ThreeDots} alt="" />
          </div>
          <div className="card__hours">
            <p className='card__current'>{
              hoursData.social_current === undefined
              ?'0'
              : hoursData.social_current + 'hrs'
            }</p>
            <p className='card__previous'>Previous - {
              hoursData.social_previous === undefined
              ? '0'
              : hoursData.social_previous + 'hrs'
            }</p>
          </div>
        </div>
      </div>

      <div className="card card-self-care">
        <div className="card__content">
          <div className="card__head">
            <h2 className='card__title'>Self Care</h2>
            <img className='card__dots' src={ThreeDots} alt="" />
          </div>
          <div className="card__hours">
            <p className='card__current'>{
              hoursData.care_current === undefined
              ?'0'
              : hoursData.care_current + 'hrs'
            }</p>
            <p className='card__previous'>Previous - {
              hoursData.care_previous === undefined
              ? '0'
              : hoursData.care_previous + 'hrs'
            }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
