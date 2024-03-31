import React from 'react';
import style from './style.module.css'
import search from '../../img/search.svg'

export function Input({onChange, onClick}) {

    function changeInputValue(event) {
        onChange(event.target.value)
     }

     function showInputValue(event) {
        onClick(event.target.value)

     }
    
    return(
        <div className={style.wrapperInput}>
            <input className={style.input} onChange={changeInputValue} type="city" id="city" placeholder='Введите город...'/>
            <img className={style.img} src={search} alt="search" onClick={showInputValue}/>
        </div>
    )
}