

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
