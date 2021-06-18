
//Home Page - JSON reference

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const town = towns.filter(x => x.name == 'Preston' || x.name == 'Soda Springs' || x.name == 'Fish Haven');
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');

            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;

            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
            averageRainfall = 'Avg Rainfall: ' + towns[i].averageRainfall;

            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(yearFounded);
            card.appendChild(currentPopulation);
            card.appendChild(averageRainfall);

            if (towns[i].name == 'Soda Springs') {
                document.querySelector('#soda').appendChild(card);
            }

        }




  }




  );