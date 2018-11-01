/* #Hour #Minute #Second are derived from CSS which contains transform property */


const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
/* remember date metod has lots of info, so pull out relevent info only */
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);


/*  What time is it?  OPTION ONE: have run off console time, date method without
the smoothing effect in your transform property and it ticks roughly -but -
avoids browser throttling!*/

/* Calcs: What degrees do you want to move each arm? You'll need to know the time first
and then convert them to degrees [360 degreees in a circle yo] */

/* 12 sections of the hour so 360 degrees by 12.   Don't forget to smooth out
hour hand tick as minutes go by so move according to minute progression in
incrememnts of 12 */
let hrPosition = (hr*360/12)+(min*(360/60)/12);
/* minutes will have 1 degree each but to make it move along with sec in increments
add the seconds as they tick in 60 increments -- smooth moving of clock arm */
let minPosition = (min*360/60)+(sec*(360/60)/60);
/* 60 seconds on a clock but need degrees, so divide each second by 360 */
let secPosition = sec*360/60;



/*  Need a function to move things along so use .setInterval and puttingthe clock
inside a function to update the second hand with our current time */

function runningClock() {

/* OPTION TWO: establishes position of hands to be smooth as time progresses in ratios
comparable to above (degree/60 + any smoothing element increment)  The math
is the script moving the time along.   Browser throttling WILL occur when you come
back to page...  */

  hrPosition = hrPosition + (3/360);
  minPosition = minPosition + (6/60);
  secPosition = secPosition + 6;

/*  The JS that takes the attributes and assigns positions and will
later rotate them because of the transform property in CSS */

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

/* setInterval runs on milliseconds, so use 1000 as we are using seconds for the clock */

var interval = setInterval(runningClock, 1000);
