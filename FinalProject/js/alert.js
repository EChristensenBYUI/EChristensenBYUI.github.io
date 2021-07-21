

//const apiURL="https://api.openweathermap.org/data/2.5/onecall?lat=32.253460&lon=-110.911789&exclude=minutely,hourly&appid=ab1af1b162d4021b8b58055befd97b83&units=imperial";

fetch(apiURL) 
  .then((response) => response.json())
  .then((jsObject) => {
   console.log(jsObject);

   const alerts=jsObject.alerts;

  alerts.forEach( x => {
      //var startdate = new Date(x.start * 1000);
     // var enddate = new Date(x.end * 1000);

     var startdate = x.start;

    var enddate = x.end;

    const nd = new Date();
    var now = nd.getTime();

    var event = x.event;
    var desc = x.description;

      //console.log(startdate, enddate, now);

      if (startdate < now < enddate) {
          alert(event + "\r\n" + "\r\n" + desc);
      }
  })
  });