// Creates a reference url to my data.
var myDataRef = new Firebase('https://jj7dk0azw9k.firebaseio-demo.com/');

$(function() {
	$('#report-button').click(function () {
	  var name = $('#nameInput').val();
	  var address = $('#addressInput').val();
	  var redfin = $("#redfinInput").val();
	  var mls = $('#mlsInput').val();
	  var date = $('#dateInput').val();

	  myDataRef.push({name: name, address: address, mls: mls, redfin: redfin, date: date});

	  $('#nameInput').val('');
	  $('#addressInput').val('');
	  $('#redfinInput').val('');
	  $('#mlsInput').val('');
	  $('#dateInput').val('');
	});

  myDataRef.on('child_added', function(snapshot) {
	  var report = snapshot.val();

		displayReportSummary(report.name, report.address, report.mls, report.redfin, report.date);
	});
});

function displayReportSummary(name, address, redfin, mls, date) {
	$("#address").text(address);
	$("#mls").text(mls);
	$("#mls").html("<a href=" + redfin + ">Redfin listing</a>");
	$("#inspector-name").text(name);
	$("#inspection-date").text(date);
};