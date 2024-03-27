import React from 'react';
import style from './style.module.css'

export function CardEvening(props) {
  const weekdayName = new Date(props.evening.dt * 1000).toLocaleString('ru', {weekday: 'long'});
  const dayName = new Date(props.evening.dt * 1000).toLocaleString();
   
  let imgLink= `https://openweathermap.org/img/wn/${props.evening.weather[0].icon}@2x.png`;
   
  return (
    <div className={style.card}>
        <h3 className={style.text}>{dayName}</h3>
        <h3 className={style.text}>{weekdayName}</h3>
        <h3 className={style.text}>{Math.round(props.evening.main.temp)}°</h3>
        <h3 className={style.text}>{Math.round(props.evening.main.humidity)}%</h3>
        <h3 className={style.text}>{props.evening.weather[0].description}</h3> 
        <img className={style.img} src={imgLink} alt="weatherIcon"/>   
    </div>
   )
}
