function countdown(){
	var counter = document.getElementById('timer_div');
	counter.innerHTML = parseInt(counter.innerHTML)-1;
	if (parseInt(counter.innerHTML) == 0)
	{
		clearInterval(timerId);
		window.location = "http://brite-advisors.com";
	}
}

var timerId = setInterval(function(){
	countdown();
}, 1000);

window.onload = timerId;
