// Creates a reference url to my data.
var myDataRef = new Firebase('https://jj7dk0azw9k.firebaseio-demo.com/');

$(function() {
	$('#report-button').click(function () {
	  var name = $('#nameInput').val();
	  var address = $('#addressInput').val();
	  var mls = $('#mlsInput').val();
	  var date = $('#dateInput').val();

	  myDataRef.push({name: name, address: address, mls: mls, date: date});

	  $('#nameInput').val('');
	  $('#addressInput').val('');
	  $('#mlsInput').val('');
	  $('#dateInput').val('');
	});

  myDataRef.on('child_added', function(snapshot) {
	  var report = snapshot.val();
	  console.log(report);
		displayReportSummary(report.name, report.address, report.mls, report.date);
	});
});

function displayReportSummary(name, address, mls, date) {
	console.log(name);
	$("#address").text(address);
	$("#mls").text(mls);
	$("#inspector-name").text(name);
	$("#inspection-date").text(date);
};