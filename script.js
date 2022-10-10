
let digitalClock = document.querySelector('.dig_clock');
let second = document.querySelector('.c_s');
let minute = document.querySelector('.c_m');
let hour = document.querySelector('.c_h');
let date = document.querySelector('.date');

function updateClock(){

    let selectTimeZone = document.querySelector('.select-time');
    let selectValue = selectTimeZone.options[selectTimeZone.selectedIndex].value;

    let now = new Date();

    let hourOption = {
        timeZone: `${selectValue}`,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        dayPeriod: 'long'
    }

    let dateOption = {
        timeZone: `${selectValue}`,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    let newHour = new Intl.DateTimeFormat('en-GB', hourOption).format(now);

    digitalClock.innerHTML = newHour;

    date.innerHTML = new Intl.DateTimeFormat('en-GB', dateOption).format(now);

    let h = newHour[0] + newHour[1];
    let m = newHour[3] + newHour[4];
    let s = newHour[6] + newHour[7];

    sDeg = ((360 / 60) * s) - 90;
    mDeg = ((360 / 60) * m) - 90;
    hDeg = ((360 / 12) * h) + ((30/60) * m) - 90;

    second.style.transform = `rotate(${sDeg}deg)`;
    minute.style.transform = `rotate(${mDeg}deg)`;
    hour.style.transform = `rotate(${hDeg}deg)`;

}

setInterval(updateClock, 1000);

updateClock();