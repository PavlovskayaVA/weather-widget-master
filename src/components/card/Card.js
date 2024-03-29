import React from 'react';
import style from './style.module.css'
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'

export function Card({temp, tempFeel, weather, humidity, pressure, wind, img, sunrise, sunset, timezone}) {
  /*Форматирование даты*/
  function formatDate (d) {
    let hour = d.getUTCHours(); 
    let minutes = d.getUTCMinutes();
        
    if (hour < 10)  {
      hour = '0' + d.getUTCHours();
    }    
    if (minutes < 10 )  {
      minutes = '0' + d.getUTCMinutes();
    } 
    return `${hour}:${minutes}`
  } 
  
  let sunriseTime = formatDate(new Date((sunrise + timezone)*1000));
  let sunsetTime = formatDate(new Date((sunset + timezone)*1000));
   
  let imgLink= `https://openweathermap.org/img/wn/${img}@2x.png`;

  return (
    <div className={style.cardWrapper}>
      <div className={style.cardNow}>
        <h3>Температура: {Math.round(temp)}&deg;</h3>
        <h3>Ощущается как: {Math.round(tempFeel)}&deg;</h3>
        <h3>Влажность: {humidity}%</h3>
        <h3>Давление: {(pressure* 0.750063755419211).toFixed(0)} мм рт.ст.</h3>
        <h3>Скорость ветра: {wind} м/с</h3>
        <h3>{weather}</h3>
        <img src={imgLink} alt="weatherIcon"/> 
      </div>
      <div className={style.sunTime}>
        <div>
          <img className={style.img} src={sun} alt="sun"/>
          <h3>Восход: {sunriseTime}</h3>
        </div>
        <div>
          <h3>Закат: {sunsetTime}</h3>
          <img className={style.img} src={moon} alt="moon"/>
        </div>
      </div>
    </div>
   )
  }

  



