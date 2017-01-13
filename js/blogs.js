
$( document ).ready( function() {
	$.get('/blogs/2017/Mesoscale-data-science.html', function(data) {
		$( "#mostrecent" ).html( data );
	});
});
