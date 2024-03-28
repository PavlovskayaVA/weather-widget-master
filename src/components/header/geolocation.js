import React from 'react';
import style from './style.module.css'
import location from '../../img/location.svg'

export function Geolocation({onClick}) {

 function tabuGeolocation(event) {
  onClick(event.target.value)
}

  return (
    <>
        <header className={style.headerInner}>
          <div className={style.wrapperInput}>
              <img className={style.img} src={location} alt="search" onClick={tabuGeolocation}/>
          </div>
      </header>
    </>
  )
}