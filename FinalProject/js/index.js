

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//Last modified date

document.querySelector('#lastmod').innerHTML = document.lastModified;
document.querySelector('#year').innerHTML =  new Date().getFullYear();

const datefield = document.querySelector("#currentyear");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

//Weather - Current (top of home page)

const apiURL="https://api.openweathermap.org/data/2.5/onecall?lat=32.253460&lon=-110.911789&exclude=minutely&appid=ab1af1b162d4021b8b58055befd97b83&units=imperial";

fetch(apiURL) 
  .then((response) => response.json())
  .then((jsObject) => {
   console.log(jsObject);

   document.getElementById('temp').textContent = jsObject.current.temp.toFixed(0) + '\u00B0' + 'F' + "";

   document.getElementById('desc').textContent = jsObject.current.weather[0].description;

   document.getElementById('humid').textContent = "Humidity: " + jsObject.current.humidity;

   let day = 0;
   const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

   //filter the json data to just one time a day
   //const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));

  // console.log(fiveDayForecast);
// loop through each day
for (let i=0; i < 2; i++)  {
	   let d = new Date(value.dt * 1000).toLocaleDateString("en", {weekday: "long"});
	  console.log(d);
	   document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
	   document.getElementById(`forecast${day+1}`).textContent = x.main.temp.toFixed(0) + '\u00B0' + 'F';
	   const image = 'http://openweathermap.org/img/wn/' + x.weather[0].icon + '@2x.png';
	   const desc = x.weather[0].description;
	   document.getElementById(`icon${day+1}`).setAttribute('src', image);
	   document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
	   day++;
   };


  })





//	for (let i=0; i < 2; i++) {