

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



    //Lazy Load

    let imagesToLoad = document.querySelectorAll('img[data-src]');

    const loadImages = (image) => {
      image.setAttribute('src', image.getAttribute('data-src'));
      image.onload = () => {
        image.removeAttribute('data-src');
      };
    };

//This part is almost like adding css
    const imgOptions = {
      rootMargin: '0px 0px -300px 0px',
      threshold: 3
    };
//This part is making sure the IntersectionalObserver is a thing in that particular browser
    if('IntersectionalObserver' in window) {
      const imgObserver = new IntersectionObserver(items => {
        items.forEach(item => {
          if (item.isIntersecting) {
            loadImages(item.target); /*this means target the images*/
            imgObserver.unobserve(item.target);
          }
        });

      }, imgOptions);
      imagesToLoad.forEach(img => {
        imgObserver.observe(img);
      })

    }

    //if IntersectionalObserver is not supported just load the images
    else {
      imagesToLoad.forEach(img => {
        loadImages(img);
      }); 
    }
    


      //on next assignmnet try just doing load="lazy" attribute in html


//Local Storage - days since previous visit

//define original date ('first'), store in local storage ('firstV')
//find the difference between that date and todays date ('difference') and calculate

if ("firstV" in localStorage){



var first = new Date(localStorage.getItem('firstV'));
var difference = now.getTime() - first.getTime();
const numDays = difference / (1000 * 3600 * 24);

/*const storeDays = () => {
  localStorage.setItem('firstV', now);
} <---Incorrect, localStorage should be outside of statements, and function is uneccessary*/

document.querySelector('.days').innerHTML = 'Thanks for stopping by! It has been ' + numDays.toFixed(0) + ' days since you visited us';
}

else {
  document.querySelector('.days').innerHTML = 'Welcome! This is your first visit to the page!';
}

localStorage.setItem('firstV', now);


//Range for Storm Center

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}


//Home Page - JSON reference

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    //const town = towns.filter(x => x.name == 'Preston' || x.name == 'Soda Springs' || x.name == 'Fish Haven');

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