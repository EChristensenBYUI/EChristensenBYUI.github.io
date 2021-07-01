

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


//DATES

document.querySelector('#lastmod').innerHTML = document.lastModified;
document.querySelector('#year').innerHTML =  new Date().getFullYear();

const datefield = document.querySelector("#currentyear");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them

datefield.innerHTML = `${fulldate}`;


let thedate = new Date();
	if (thedate.getDay() == 5) {
		document.querySelector('.banner').style.display="block";
	}

//WINDCHILL


/* Input: Temperature and Windspeed
 * Processing: create two functions - one for the formula and one that calls to the formula and displays the answer
 Divide formula into three parts to make calculation less muddled (for me)
 return the result
 doInputOutput function receives the value from the windchill function
 * Output: Calculated Wind Chill
 */

 var tempF = document.querySelector('#temp').innerHTML;
 var speed = document.querySelector('#speed').innerHTML;
 console.log(tempF, speed);




    if (tempF <= 50 && speed > 3) {
        let answer = windChill(tempF, speed);
        document.querySelector('#windOutput').innerHTML = answer + '&#176;F';

    }
       
    else {  document.querySelector('#windOutput').innerHTML = 'N/A';}
      

  //  document.querySelector('#windOutput').innerHTML = answer;



 function windChill(tempF, speed) {
     let partOne = 35.74 + (0.6215 * tempF);
     let firstExp = 35.74 * (Math.pow(speed, 0.16));
     let secondExp = 0.4275 * tempF * (Math.pow(speed, 0.16));
     let result = partOne - firstExp + secondExp;
     let result2 = Math.trunc(result);
     return result2;
    }


    //Preston ID weather information:

    const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ab1af1b162d4021b8b58055befd97b83&units=imperial";
    fetch(apiURL) 
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);
    
        document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);

        document.getElementById('current').textContent = jsObject.weather[0].description.toUpperCase();

        document.getElementById('humid').textContent = " " + jsObject.main.humidity;

        document.getElementById('speed').textContent = " " + jsObject.wind.speed;

    
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
         document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
         document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
         document.getElementById('icon').setAttribute('alt', desc);
    
      });
    



      const apiURLforecast="https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ab1af1b162d4021b8b58055befd97b83&units=imperial";
      fetch(apiURLforecast) 
        .then((response) => response.json())
        .then((jsObject) => {
          console.log(jsObject);

          let day = 0;
          const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

          //filter the json data to just one time a day
          const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));

          console.log(fiveDayForecast);
// loop through each day
          fiveDayForecast.forEach( x => {
              let d = new Date(x.dt_txt);
              console.log(d);
              document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
              document.getElementById(`forecast${day+1}`).textContent = x.main.temp.toFixed(0) + '\u00B0' + 'F';
              const image = 'http://openweathermap.org/img/wn/' + x.weather[0].icon + '@2x.png';
              const desc = x.weather[0].description;
              document.getElementById(`icon${day+1}`).setAttribute('src', image);
              document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
              day++;
          });

        });

        //try to do 'querySelector' instead of getElementbyID