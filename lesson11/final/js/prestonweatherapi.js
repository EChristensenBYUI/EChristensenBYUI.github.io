//Preston ID weather information:

    const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ab1af1b162d4021b8b58055befd97b83&units=imperial";
    fetch(apiURL) 
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);
        
    
        document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);

        document.getElementById('current').textContent = jsObject.weather[0].description;

        document.getElementById('humid').textContent = " " + jsObject.main.humidity;

        document.getElementById('speed').textContent = " " + jsObject.wind.speed;

    
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
         document.getElementById('imagesrc').innerHTML = imagesrc;  // informational specification only
         document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
         document.getElementById('icon').setAttribute('alt', desc);
    
      });
    



      const apiURLforecast="https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ab1af1b162d4021b8b58055befd97b83&units=imperial";
      fetch(apiURLforecast) 
        .then((response) => response.json())
        .then((jsObject) => {
          //console.log(jsObject);

          let day = 0;
          const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

          //filter the json data to just one time a day
          const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));

         // console.log(fiveDayForecast);
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
        

        //Upcoming Events

        const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    let card = document.createElement('div');
    let events = document.createElement('p');
    let events2 = document.createElement('p');
    let events3 = document.createElement('p');

    events.textContent = towns[6].events[0];
    events2.textContent = towns[6].events[1];
    events3.textContent = towns[6].events[2];

    card.appendChild(events);
    card.appendChild(events2);
    card.appendChild(events3);

    document.querySelector('#events').appendChild(card);

  })
