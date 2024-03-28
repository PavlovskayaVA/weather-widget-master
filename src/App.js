import React from 'react';
import { Input } from './components/input/input';
import { Header } from "./components/header/header";
import { Geolocation } from './components/header/geolocation';
import { Footer } from "./components/footer/footer";
import { CardDay } from './components/card/CardDay';
import { CardEvening } from './components/card/CardEvening';
import { Card } from './components/card/Card';
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
      getNowAPI();
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
          getNowAPI();
        },
        function(error) {
          console.log("Ошибка определения местоположения: " + error.message)
          getDaysAPI(); 
          getNowAPI();
        }
      );
    } else {
      console.log("Geolocation не поддерживается вашим браузером.");
    }
  }

  /*Изменение выбора прогноза*/
  const [valueDays, setValueDays] = useState(false)
  function showWeatherNow () {
      if (valueDays) {
        setValueDays(false)
        console.log(valueDays)
      } else {
        setValueDays(true)
        console.log(valueDays)
        getNowAPI()
      }
  }

  const [name,setName] = useState('');
  const [temp,setTemp] = useState('');
  const [tempFeel,setTempFeel] = useState('');
  const [wind,setWind] = useState('');
  const [weather,setWeather] = useState('');
  const [humidity,setHumidity] = useState('');
  const [img,setImg] = useState('');
  const [sunrise,setSunrise] = useState('');
  const [sunset,setSunset] = useState('');

  const API = '710ea7c0101aad29b2f38a1e787cd436';

  let daysURL = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&lang=ru&units=metric&APPID=${API}`
  let nowURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&lang=ru&units=metric&APPID=${API}`
  //https://api.openweathermap.org/data/2.5/weather?q=Тайланд&lang=ru&units=metric&APPID=710ea7c0101aad29b2f38a1e787cd436

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
        console.log(data)
        setName(data.name)
        setTemp(data.main.temp)
        setTempFeel(data.main.feels_like)
        setHumidity(data.main.humidity)
        setWind(data.wind.speed)
        setWeather(data.weather[0].description)
        setImg(data.weather[0].icon)
        setSunrise(data.sys.sunrise)
        setSunset(data.sys.sunset)
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

  if(valueDays) {
    return (
      <div>
          <div className='wrapperHeader'>
            <Input onChange={changeInputValue} onClick={showInputValue}/>
            <Header onClick={showWeatherNow}/>
            <Geolocation onClick={tabuGeolocation}/>
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
    )
  } else {
    return (
      <div>
          <div className='wrapperHeader'>
            <Input onChange={changeInputValue} onClick={showInputValue}/>
            <Header onClick={showWeatherNow}/>
            <Geolocation onClick={tabuGeolocation}/>
          </div>
          <div className="cards">
              <Card name={name} temp={temp} tempFeel={tempFeel} weather={weather} humidity={humidity} wind={wind} img={img} sunrise={sunrise} sunset={sunset}/>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
