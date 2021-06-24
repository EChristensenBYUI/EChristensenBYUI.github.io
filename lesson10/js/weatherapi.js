const apiURL="api.openweathermap.org/data/2.5/weather?id=5604473&appid=dbd78ddc3bfe081a2b988125f11b2134&units=imperial";
fetch(apiURL) 
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });