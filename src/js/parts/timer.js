function timer () {
    let deadLine = '2019-12-18';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/1000/60/60) % 24);
        days = Math.floor((t/(1000*60*60*24)));

        days = checkTime(days);
        hours = checkTime(hours);
		minutes = checkTime(minutes);
		seconds = checkTime(seconds);

        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
        function checkTime(i) {
			if (i < 10) {
				i = "0" + i;
			}
			return i;
		}
    }

    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            days = document.getElementById('days'),
            hours = document.getElementById('hours'),
            minutes = document.getElementById('minutes'),
            seconds = document.getElementById('seconds'),
            timeInterval = setInterval(upDateClock, 1000);

        function upDateClock() {
            let t = getTimeRemaining(endtime);
            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock ('timer', deadLine);
}
timer();
module.exports = timer;