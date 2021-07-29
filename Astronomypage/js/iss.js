








const issAPI="http://api.open-notify.org/iss-now.json";

fetch(issAPI)
  .then((response) => response.json())
    .then((jsObject) => {
        

        var long = jsObject.iss_position.longitude;
        var lat = jsObject.iss_position.latitude;
console.log(lat, long);




  const reverseG = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=ab1af1b162d4021b8b58055befd97b83&units=imperial&lang=en`;

  fetch(reverseG)
     .then((response) => response.json())
         .then((jsObject) => {
             console.log(jsObject);

             document.getElementById('position').textContent = jsObject.city.name;
             const pop= jsObject.city.population;
             console.log(pop);

             if (pop == 0) {
                document.querySelector('.nobody').style.display="block";
             }

         })

})


//`http://open.mapquestapi.com/geocoding/v1/reverse?key=KEY&location=${lat},${long}&includeRoadMetadata=true&includeNearestIntersection=true`

