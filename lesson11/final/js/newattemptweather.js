      const apiURLforecast="https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ab1af1b162d4021b8b58055befd97b83&units=imperial";
      fetch(apiURLforecast) 
        .then((response) => response.json())
        .then((jsObject) => {

          console.table(jsObject);

          const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));

          console.log(fiveDayForecast);

          for (let i = 0; i < fiveDayForecast.length; i++) {

              let forecastBox = document.createElement('div');
              forecastBox.setAttribute('class', 'forecastboxes');

              let h4 = document.createElement('h4');
              
              forecastWeekDay = new Date(forecast.list[i].dt_txt);
              DayName = forecastWeekDay.getDay();
              h4.textContent = days[DayName].substring(0, 3);

              forecastBox.appendChild(h4);

              console.log(forecastWeekDay);

              document.querySelector('div.forecastDiv').appendChild(forecastBox);
            
          }});