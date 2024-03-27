import React from 'react';
import { Input } from './components/input/input';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { CardDay } from './components/card/CardDay';
import { CardEvening } from './components/card/CardEvening';
import { useState, useEffect } from 'react';


function App() {
  /*Отображение input*/
  const [inputValue,setInputValue] = useState('Москва');
  function changeInputValue(inputValue) {
      setInputValue(inputValue)
  }

  /*Отправка значения из input по нажатию кнопки*/
  const [valueClick, setValueClick] = useState(false)
  function showInputValue (inputValue) {
    setValueClick(true)   
      if (valueClick) {
        setInputValue(inputValue);
      } 
      getDaysAPI()
  }

  /*Запрет определения локации*/
  const [geolocationClick, setGeolocation] = useState(true)
  function tabuGeolocation () {
      setGeolocation(false)
      if (geolocationClick) {
        alert(`Введите город в поле выше: `)
        setGeolocation(false)
      } else {
        setGeolocation(true)
        getGeolocation()
      }  
  }

  /*Определение локации*/
  function getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          daysURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric&lang=ru`;
          getDaysAPI(); 
        },
        function(error) {
          console.log("Ошибка определения местоположения: " + error.message)
          getDaysAPI(); 
        }
      );
    } else {
      console.log("Geolocation не поддерживается вашим браузером.");
    }
  }

  const API = '710ea7c0101aad29b2f38a1e787cd436';

  let daysURL = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&lang=ru&units=metric&APPID=${API}`
  let nowURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&lang=ru&units=metric&APPID=${API}`

  const [stateNow, setStateNow] = useState()
  const [stateDay, setStateDay] = useState({
    days: [],
  })
  const [stateEvening, setStateNEvening] = useState({
    evenings: []
  })

  function getNowAPI() {
    fetch(nowURL)
      .then(res => res.json())
      .then(data => {
        setStateNow(data.weather[0].description)
        console.log(data)
        console.log(data.weather[0].description)
      })
  }

  function getDaysAPI() {
    fetch(daysURL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const daysData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
        const eveningsData = data.list.filter(reading => reading.dt_txt.includes("00:00:00"));
        setStateDay({days: daysData})
        setStateNEvening({evenings: eveningsData})
      })
  }

  
  useEffect(() => {getGeolocation()}, []);

  return (
    <div>
        <div className='wrapperHeader'>
          <Input onChange={changeInputValue} onClick={showInputValue}/>
          <Header onClick={tabuGeolocation}/>
        </div>
        <div className="cards">
          <div className='cardsItem'>
            {stateDay.days.map((day, index) => <CardDay day={day} key={index}/>)}
          </div>
          <div className='cardsItem'>
            {stateEvening.evenings.map((evening, index) => <CardEvening evening={evening} key={index}/>)}  
          </div>      
        </div>
        <Footer/>
    </div>
  );
}

export default App;
