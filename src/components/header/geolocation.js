import React from 'react';
import style from './style.module.css'
import location from '../../img/location.svg'
import locationTrue from '../../img/locationTrue.svg'
import { useState } from 'react';

export function Geolocation({onClick, name}) {
const [valueGeolocation, setValueGeolocation] = useState(true)

 function tabuGeolocation(event) {
  onClick(event.target.value)
  setValueGeolocation(false)
  valueGeolocation ? setValueGeolocation(false) : setValueGeolocation(true)
}

  return (
    <>
        <header className={style.headerInner}>
          <div className={style.wrapperInput}>
              <span>{name}</span>
              <img className={style.img} src={valueGeolocation ? locationTrue : location} alt="search" onClick={tabuGeolocation}/>
          </div>
      </header>
    </>
  )
}