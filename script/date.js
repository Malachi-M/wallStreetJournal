function unavailable(date) {
	if(date.getDay() === 1) {
		return [true, ""];
	} else {
		return [false, "", "Unavailable"];
	}
}

$(document).ready(function(){
	$("#datepicker").datepicker({
		beforeShowDay: unavailable
	});
});
