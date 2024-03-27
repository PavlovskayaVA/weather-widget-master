import React from 'react';
import style from './style.module.css'

export function CardDay(props) {
  const weekdayName = new Date(props.day.dt * 1000).toLocaleString('ru', {weekday: 'long'});
  const dayName = new Date(props.day.dt * 1000).toLocaleString();
   
  let imgLink= `https://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`;
   
  return (
    <div className={style.card}>
        <h3 className={style.text}>{dayName}</h3>
        <h3 className={style.text}>{weekdayName}</h3>
        <h3 className={style.text}>{Math.round(props.day.main.temp)}°</h3>
        <h3 className={style.text}>{Math.round(props.day.main.humidity)}%</h3>
        <h3 className={style.text}>{props.day.weather[0].description}</h3> 
        <img className={style.img} src={imgLink} alt="weatherIcon"/>   
    </div>
   )
}



/*
          <div className={style.card}>
              <div className={style.city}>{name}</div> 
              <div className={style.temperature}>{Math.round(temp)}&deg;</div>
              <div className={style.weather}>{weather}</div>
              <div className={style.humidity}>{humidity}%</div>
              <img className={style.img} src={imgLink} alt="weatherIcon"/> 
          </div>



const [name,setName] = useState('');
    const [temp,setTemp] = useState('');
    const [weather,setWeather] = useState('');
    const [humidity,setHumidity] = useState('');
    const [img,setImg] = useState('');

    const [latGeolocation,setLatGeolocation] = useState('');
    const [lonGeolocation,setLonGeolocation] = useState('');

    const API = '710ea7c0101aad29b2f38a1e787cd436';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
      
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric&lang=ru`;
            async function getApiData() {
                const response = await fetch(url)
                .then((response) => response.json());

                console.log(response)

                setName(response.name)
                setTemp(response.main.temp)
                setHumidity(response.main.humidity)
                setWeather(response.weather[0].main)
                setImg(response.weather[0].icon)
            };
            getApiData(); 
          },
          
          function(error) {
            const cityName = city;
            const limit = 1;
            const urlGeolocation = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${API}&lang=ru`;
            console.log(cityName)
            async function getApiGeolocation() {
              const response = await fetch(urlGeolocation)
              .then((response) => response.json());
              setLatGeolocation(response[0].lat)
              setLonGeolocation(response[0].lon)
              console.log(response)
            };
            getApiGeolocation()
            console.log("Ошибка определения местоположения: " + error.message);
            
            const lat = latGeolocation;
            const lon = lonGeolocation;
            
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric&lang=ru`;

            async function getApiData() {
              const response = await fetch(url)
              .then((response) => response.json());
              setName(response.name)
              setTemp(response.main.temp)
              setHumidity(response.main.humidity)
              setWeather(response.weather[0].main)
              setImg(response.weather[0].icon)
            };
            getApiData();   
          }
        );
      } else {
        console.log("Geolocation не поддерживается вашим браузером.");
      }

    let imgLink= `https://openweathermap.org/img/wn/${img}@2x.png`;
    
    return (
        <div className={style.card}>
            <div className={style.city}>{name}</div> 
            <div className={style.temperature}>{Math.round(temp)}&deg;</div>
            <div className={style.weather}>{weather}</div>
            <div className={style.humidity}>{humidity}%</div>
            <img className={style.img} src={imgLink} alt="weatherIcon"/>
        </div>
    )
*/
  



