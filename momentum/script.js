// DOM Elements
const time = document.querySelector('.time'),
  timeHour = document.querySelector('.time-hour'),
  timeMin = document.querySelector('.time-min'),
  timeSec = document.querySelector('.time-sec'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.getElementById('focus'),
  dayDate = document.querySelector('.day_date'),
  btn = document.querySelector('.button');

// Options
const days = ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'],
monthsName = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' 
];


// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //day = days;

  // Set AM or PM
  const amPm = hour;

  // 12hr Format
  //hour = hour % 12 || 12;

  // Output Time
  timeHour.innerHTML = addZero(hour);
  timeMin.innerHTML = addZero(min);
  timeSec.innerHTML = addZero(sec);

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function showDay(){
  
let currentDate = new Date(),
    currentDay = currentDate.getDay(),
    currentDayNumber = currentDate.getDate();
    currentMonth = currentDate.getMonth();
    
dayDate.innerHTML = `${days[currentDay]}<span>, </span>${currentDayNumber}<span> </span>${monthsName[currentMonth]}`;
setTimeout(showDay, 1000);
}

const backgroundImagesArray = [
  "url('assets/images/night/"+addZero(getRandom(1, 20))+".jpg')", 
  "url('assets/images/night/"+addZero(getRandom(1, 20))+".jpg')", 
  "url('assets/images/night/"+addZero(getRandom(1, 20))+".jpg')", 
  "url('assets/images/night/"+addZero(getRandom(1, 20))+".jpg')", 
  "url('assets/images/night/"+addZero(getRandom(1, 20))+".jpg')", 
  "url('assets/images/night/"+addZero(getRandom(1, 20))+".jpg')", 

  "url('assets/images/morning/"+addZero(getRandom(1, 20))+".jpg')", 
  "url('assets/images/morning/"+addZero(getRandom(1, 20))+".jpg')", 
  "url('assets/images/morning/"+addZero(getRandom(1, 20))+".jpg')",
  "url('assets/images/morning/"+addZero(getRandom(1, 20))+".jpg')", 
  "url('assets/images/morning/"+addZero(getRandom(1, 20))+".jpg')", 
  "url('assets/images/morning/"+addZero(getRandom(1, 20))+".jpg')", 

  "url('assets/images/day/"+addZero(getRandom(1, 20))+".jpg')", 
  "url('assets/images/day/"+addZero(getRandom(1, 20))+".jpg')", 
  "url('assets/images/day/"+addZero(getRandom(1, 20))+".jpg')", 
  "url('assets/images/day/"+addZero(getRandom(1, 20))+".jpg')", 
  "url('assets/images/day/"+addZero(getRandom(1, 20))+".jpg')",
  "url('assets/images/day/"+addZero(getRandom(1, 20))+".jpg')",

  "url('assets/images/evening/"+addZero(getRandom(1, 20))+".jpg')",
  "url('assets/images/evening/"+addZero(getRandom(1, 20))+".jpg')",
  "url('assets/images/evening/"+addZero(getRandom(1, 20))+".jpg')",
  "url('assets/images/evening/"+addZero(getRandom(1, 20))+".jpg')",
  "url('assets/images/evening/"+addZero(getRandom(1, 20))+".jpg')",
  "url('assets/images/evening/"+addZero(getRandom(1, 20))+".jpg')" 
];

// Set Background and Greeting
//утро 6:00-12:00, день 12:00-18:00, вечер 18:00-24:00, ночь 24:00-6:00.
function setBgGreet() {
  //let today = new Date(2020, 6, 10, 20, 33, 30);
  let today = new Date();
  let hour = today.getHours();

  if(hour < 6){
      //Night
      document.body.style.backgroundImage = backgroundImagesArray[today.getHours()];
      greeting.textContent = "Good night,"
  } else if(hour < 12) {
      //Morning
      document.body.style.backgroundImage = backgroundImagesArray[today.getHours()];
      greeting.textContent = "Good morning,"
  } else if (hour < 18) {
      //Day
      document.body.style.backgroundImage = backgroundImagesArray[today.getHours()];
      greeting.textContent = "Good afternoon,"
  } else {
      //Evening
      document.body.style.backgroundImage = backgroundImagesArray[today.getHours()];
      greeting.textContent = "Good evening,"
  }

  let imageNumber = today.getHours();
  btn.addEventListener("click", function (event) {
      btn.disabled = true;
      if (btn.contains(event.target)) {

          if(imageNumber < 23) {
              imageNumber += 1;
              document.body.style.backgroundImage = backgroundImagesArray[imageNumber];
          } else {
              imageNumber = 0;
              document.body.style.backgroundImage = backgroundImagesArray[imageNumber];
          }

          setTimeout(function() { btn.disabled = false }, 1300);
      }
  });

  //update every new hour
  let current = new Date();
  let future = new Date();
  future.setTime(future.getTime() + 3600000); //3600000 = 1 hour
  future.setMinutes(0);
  future.setSeconds(0);

  let timeout = (future.getTime() - current.getTime());
  setTimeout(setBgGreet, timeout);
}

/*function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
} */

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}
/*
function shuffle(arr){
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
let arr2 = [];

for (let i = 1; i < 20; i++){
  arr2.push(i);
}

function morningBackgroundImage() {

}

function NumberOfBackgroundImage() {
  let k = Math.floor(Math.random()*(6));
  let currenNumber = 0;
  arr2 = arr2.slice(0,6);
  if(arr2[k] < 10){
    currenNumber =`0${arr2[k]}`;
  }else{
    currenNumber = arr2[k];
    }
  return currenNumber;
//  "url('assets/images/day/03.jpg')"
}

*/
//Get name
function getName() {
  if(localStorage.getItem('name') === null){
      name.textContent = 'Enter name';
  } else {
      name.textContent = localStorage.getItem('name');
  }
}

//Clean name
function cleanName(e) {
  if(e.type === "focus"){
      name.textContent = '';
  }
}

//Set name
function setName(e) {
  if(e.type === "keypress") {
      //Make sure enter is pressed
      if(e.which == 13){
          if(name.textContent && name.textContent.trim()) {
              localStorage.setItem('name', e.target.innerText);
              name.blur();
          } else {
              name.textContent = localStorage.getItem('name');
              name.blur();
          }

          if(localStorage.getItem('name') === null || !name.textContent.trim()){
              name.textContent = 'Enter name';
          }
      }
  } else {
      if(name.textContent && name.textContent.trim()) {
          localStorage.setItem('name', e.target.innerText);
      } else {
          name.textContent = localStorage.getItem('name');
      }

      if(localStorage.getItem('name') === null || !name.textContent.trim()){
          name.textContent = 'Enter name';
      }
  }
}

//Get focus
function getFocus() {
  if(localStorage.getItem('focus') === null){
      focus.textContent = 'Enter your focus';
  } else {
      focus.textContent = localStorage.getItem('focus');
  }
}

//Clean focus of focus
function cleanFocus(e) {
  if(e.type === "focus"){
      focus.textContent = '';
  }
}

//Set focus
function setFocus(e) {
  if(e.type === "keypress") {
      //Make sure enter is pressed
      if(e.which == 13){
          if(focus.textContent && focus.textContent.trim()) {
              localStorage.setItem('focus', e.target.innerText);
              focus.blur();
          } else {
              focus.textContent = localStorage.getItem('focus');
              focus.blur();
          }
          if(localStorage.getItem('focus') === null || !focus.textContent.trim()){
              focus.textContent = 'Enter your focus';
          }
      }
  } else {
      if(focus.textContent && focus.textContent.trim()) {
          localStorage.setItem('focus', e.target.innerText);
      } else {
          focus.textContent = localStorage.getItem('focus');
      }
      if(localStorage.getItem('focus') === null || !focus.textContent.trim()){
          focus.textContent = 'Enter your focus';
      }
  }
}
name.addEventListener('focus', cleanName);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('focus', cleanFocus);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
//Weather
const city = document.querySelector('.weather-city');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.weather-temperature');
const weatherDescription = document.querySelector('.weather-description');
const humidity = document.querySelector('.weather-humidity');
const wind = document.querySelector('.weather-wind');
const errorMessage = document.querySelector('.weather-error-message');

async function getWeather() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city.textContent+'&lang=en&appid=ca2c901f5f65da73c9ff37cee8a0e7ce&units=metric';
    const res = await fetch(url);
    if(res.ok){
        const data = await res.json();
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
        humidity.textContent = `humidity ${data.main.humidity}%`;
        wind.textContent = `wind ${data.wind.speed} м/с`;
        errorMessage.textContent = '';
    } else if (!(res.ok) && localStorage.getItem('city')) {
        weatherIcon.className = '';
        temperature.textContent = '';
        weatherDescription.textContent = '';
        humidity.textContent = '';
        wind.textContent = '';
        errorMessage.textContent = "Something wrong. Try again later";
    } else  {
        weatherIcon.className = '';
        temperature.textContent = '';
        weatherDescription.textContent = '';
        humidity.textContent = '';
        wind.textContent = '';
        errorMessage.textContent = '';
    }

    setTimeout(getWeather, 3600000);
}

//Get city
function getCity() {
    if(localStorage.getItem('city') === null){
        city.textContent = 'Enter city';
    } else {
        city.textContent = localStorage.getItem('city');
        //getWeather();
    }
}

//Clean city
function cleanCity(e) {
    if(e.type === "focus"){
        city.textContent = '';
    }
}

//Set city
function setCity(e) {
    if(e.type === "keypress") {
        //Make sure enter is pressed
        if(e.which == 13){
            if(city.textContent && city.textContent.trim()) {
                localStorage.setItem('city', e.target.innerText);
                city.blur();
                getWeather();
            } else {
                city.textContent = localStorage.getItem('city');
                city.blur();
                getWeather();
            }

            if(localStorage.getItem('city') === null || !city.textContent.trim()){
                city.textContent = 'Enter city';
            }
        }
    } else {
        if(city.textContent && city.textContent.trim()) {
            localStorage.setItem('city', e.target.innerText);
            getWeather();
        } else {
            city.textContent = localStorage.getItem('city');
            getWeather();
        }

        if(localStorage.getItem('city') === null || !city.textContent.trim()){
            city.textContent = 'Enter city';
        }
    }
}

//City
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('focus', cleanCity);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);


const quote = document.querySelector('.quote-text');
const author = document.querySelector('.quote-author');
const btnQuote = document.querySelector('.quote-btn');

async function getQuote() {
    const url =  `https://quote-garden.herokuapp.com/api/v2/quotes/random`;
    const res = await fetch(url);

    if(res.ok){
        const data = await res.json();

        quote.textContent = data.quote.quoteText;
        author.textContent = data.quote.quoteAuthor;

    } else {
        quote.textContent = "Something wrong. Try again later";
    }

}
btnQuote.addEventListener("click", function (event) {
  btnQuote.disabled = true;
  if (btnQuote.contains(event.target)) {
      getQuote();
      setTimeout(function() { btnQuote.disabled = false }, 1300);
  }
});
document.addEventListener('DOMContentLoaded', getQuote);
// Run
showTime();
showDay();
setBgGreet();
getName();
getFocus();
getCity();
