

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
      rootMargin: '0px 0px 50px 0px',
      threshold: 1
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


//Local Storage

var date = localStorage.getItem(date);

console.log(date)
