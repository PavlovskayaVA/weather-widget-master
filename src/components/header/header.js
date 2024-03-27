import React from 'react';
import style from './style.module.css'
import location from '../../img/location.svg'

export function Header({onClick}) {
  function showWeatherNow(event) {
    onClick(event.target.value)
 }

 function tabuGeolocation(event) {
  onClick(event.target.value)
}

  return (
    <>
        <header className={style.headerInner}>
          <span>
                <div className={style.text} onClick={showWeatherNow}>Прогноз погоды на текущий момент</div>
                <div className={style.text} onClick={showWeatherNow}>Прогноз погоды на 5 дней</div>
            </span>
          <div className={style.wrapperInput}>
              <img className={style.img} src={location} alt="search" onClick={tabuGeolocation}/>
          </div>
      </header>
    </>
  )
}
