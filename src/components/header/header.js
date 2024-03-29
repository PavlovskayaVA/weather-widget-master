import React from 'react';
import style from './style.module.css'
import { useState } from 'react';


export function Header({onClick}) {
  const [valueChangeWeather, setValueChangeWeather] = useState(true)

  function showWeatherNow(event) {
    onClick(event.target.value)
    setValueChangeWeather(false)
    valueChangeWeather ? setValueChangeWeather(false) : setValueChangeWeather(true)
 }


  return (
    <>
        <header className={style.headerInner}>
          <span className={style.headerWrapper}>
              <span className={style.text} onClick={showWeatherNow}>{valueChangeWeather ? 'Прогноз погоды на 5 дней' : 'Прогноз погоды на текущий момент'}</span>
          </span>
      </header>
    </>
  )
}
