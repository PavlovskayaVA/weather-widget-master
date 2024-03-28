import React from 'react';
import style from './style.module.css'


export function Card({name, temp, tempFeel, weather, humidity, wind, img, sunrise, sunset}) {
  
  let sunriseTime = new Date(sunrise * 1000).toLocaleString().slice(11, -3);
  let sunsetTime = new Date(sunset * 1000).toLocaleString().slice(11, -3);
   
  let imgLink= `https://openweathermap.org/img/wn/${img}@2x.png`;

  return (
    <div className={style.cardNow}>
      <div>
        <div className={style.city}>{name}</div> 
        <div className={style.temperature}>Температура: {Math.round(temp)}&deg;</div>
        <div className={style.temperature}>Ощущается как: {Math.round(tempFeel)}&deg;</div>
        <div className={style.humidity}>Влажность: {humidity}%</div>
        <div className={style.humidity}>Скорость ветра: {wind} м/с</div>
        <div className={style.weather}>{weather}</div>
        <img className={style.img} src={imgLink} alt="weatherIcon"/> 
      </div>
      <div>
        <div className={style.temperature}>Восход: {sunriseTime}</div>
        <div className={style.temperature}>Закат: {sunsetTime}</div>
      </div>
    </div>
   )
  }

  



