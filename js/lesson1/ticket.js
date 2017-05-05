
// get random six-digit number
function getRandomTicket() {
  min = 100000;
  max = 1000000;
  return Math.floor(Math.random() * (max - min)) + min;
}

function isLuckyTicket(ticketNumber) {
	t0 = (ticketNumber/1000).toString(); // first 3 digit
	t1 = (ticketNumber%1000).toString(); // second 3 digit
	t0Sum = +t0[0] + +t0[1] + +t0[2];
	t1Sum = +t1[0] + +t1[1] + +t1[2];
	return (t0Sum - t1Sum) == 0 ? true : false;	
}

var t = getRandomTicket();
result = isLuckyTicket(t) ? t + " - Билет счастливый" : t + " - Билет не счастливый"

document.getElementById("result").innerHTML = result;