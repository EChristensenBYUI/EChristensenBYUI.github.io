const apiURL="api.openweathermap.org/data/2.5/weather?id=5604473&appid=ab1af1b162d4021b8b58055befd97b83";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });