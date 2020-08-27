var second_hand = document.getElementById("second_hand");
var minute_hand = document.getElementById("minute_hand");
var hour_hand = document.getElementById("hour_hand");

function time() {
    with (new Date()) {
        hours = 30 * (getHours() % 12) + (getMinutes() / 2);
        minutes = 6 * getMinutes() + 0.1 * getSeconds();
        seconds = 6 * getSeconds() + 0.006 * getMilliseconds(); 

        second_hand.style.cssText =
        "-webkit-transform: rotate(" + seconds + "deg);";

        minute_hand.style.cssText =
        "-webkit-transform: rotate(" + minutes + "deg);";

        hour_hand.style.cssText =
        "-webkit-transform: rotate(" + hours + "deg);";

        setTimeout(time, 1);
    }
}

window.onload = time;