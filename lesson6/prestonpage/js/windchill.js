/* Input: Temperature and Windspeed
 * Processing: create two functions - one for the formula and one that calls to the formula and displays the answer
 Divide formula into three parts to make calculation less muddled (for me)
 return the result
 doInputOutput function receives the value from the windchill function
 * Output: Calculated Wind Chill
 */



 function doInputOutput() {
    var tempF = parseFloat(document.querySelector('temp').value);
    var speed = parseFloat(document.querySelector('speed').value);
    console.log(tempF, speed);

    if (tempF <= 50 && speed >= 3) {
        let answer = windChill(tempF, speed);


    }
       
    let answer = 'N/A';

    document.querySelector('windOutput').innerHTML = answer;

 }

 function windChill(tempF, speed) {
     let partOne = 35.74 + (0.6215 * tempF);
     let firstExp = 35.74 * (Math.pow(speed, 0.16));
     let secondExp = 0.4275 * tempF * (Math.pow(speed, 0.16));
     let result = partOne - firstExp + secondExp;
     return result;
    }