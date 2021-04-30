//BUY NOW!
 
// Set the end time of the spike based on the current time
var endtime = new Date('2021-06-01 10:00:00'), endseconds = endtime.getTime() + 60 * 1000;
// Declare the variable to save the remaining time
var d = h = m = s = 0;
// Set a timer to achieve a time-limited spike effect
var id = setInterval(seckill, 1000);
function seckill() {
    var nowtime = new Date(); // Get the current time
    // Get the time difference, in seconds
    var remaining = parseInt((endseconds - nowtime.getTime()) / 1000);
    // Determine whether the spike has expired
    if (remaining > 0) {
        d = parseInt(remaining / 86400); // Calculate the remaining days (divide by 60*60*24 and round to get the remaining days)
        h = parseInt((remaining / 3600) % 24); // Calculate the remaining hours (divide by 60*60 to convert to hours, take the modulo 24 to obtain the remaining hours)
        m = parseInt((remaining / 60) % 60); // Calculate the remaining minutes (divide by 60 to turn into minutes, and take the modulo 60 to obtain the remaining minutes)
        s = parseInt(remaining % 60); // Calculate the remaining seconds (take the modulo 60 to obtain the remaining seconds)
        // Use two digits to indicate the remaining days, hours, minutes and seconds
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
    } else {
        clearInterval(id); // The spike expires, cancel the timer
        d = h = m = s = '00';
    }
    // Display the remaining days, hours, minutes and seconds on the specified webpage
    document.getElementById('d').innerHTML = d + 'days';
    document.getElementById('h').innerHTML = h + 'hours';
    document.getElementById('m').innerHTML = m + 'minutes';
    document.getElementById('s').innerHTML = s + 'seconds';
}
 