function getFahrenheits(result){
	let temps = result.hourly_forecast.map(resp => resp.temp.english)
	// console.log(temps)
	return temps
}

function getHours(result){
	let hours = result.hourly_forecast.map(resp => resp.FCTTIME.hour)
	// console.log(hours)
	return hours
}

function generateDataSet(labels, data) {

  return {
      labels: labels,
      datasets: [
      {
        label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: data
      }
      ]
    };

}

function makeAjaxRequest(endpoint, success) {
	$.ajax({
		url: endpoint,
		dataType: 'jsonp',
		success: success
	})
}
