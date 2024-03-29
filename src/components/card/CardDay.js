import React from 'react';
import style from './style.module.css'
import { formatDate } from './formatDate';

export function CardDay(props) {
  const weekdayName = new Date(props.day.dt * 1000).toLocaleString('ru', {weekday: 'long'});
  const dayName = new Date(props.day.dt * 1000).toLocaleString().slice(11, -3);
  const dayNow = formatDate(new Date(props.day.dt * 1000))
   
  let imgLink= `https://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`;
   
  return (
    <div className={style.card}>
        <h1 className={style.text}>{weekdayName}</h1>
        <h3 className={style.text}>{dayNow}</h3>
        <h3 className={style.text}>{dayName}</h3>
        <h3 className={style.text}>{Math.round(props.day.main.temp)}°</h3>
        <h3 className={style.text}>{Math.round(props.day.main.humidity)}%</h3>
        <h3 className={style.text}>{props.day.weather[0].description}</h3> 
        <img className={style.img} src={imgLink} alt="weatherIcon"/>   
    </div>
   )
}
