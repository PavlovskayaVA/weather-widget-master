import React from 'react';
import style from './style.module.css'
import { useState } from 'react';


export function Header({onClick}) {
  const [value, setValue] = useState(true)

  function showWeatherNow(event) {
    onClick(event.target.value)
    setValue(false)
    value ? setValue(false) : setValue(true)
 }

  return (
    <>
        <header className={style.headerInner}>
          <span>
              <div className={style.text} onClick={showWeatherNow}>{value ? 'Прогноз погоды на текущий момент' : 'Прогноз погоды на 5 дней'}</div>
          </span>
      </header>
    </>
  )
}
