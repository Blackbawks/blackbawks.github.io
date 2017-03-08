
$( document ).ready( function() {

	$(".getblog").click(function () {
        	var addressValue = $(this).attr("href");
        	$.get(addressValue,function(data) {
			$( "#mostrecent" ).html( data );
		});
    	});

	$.get('/blogs/2017/Mesoscale-data-science.html', function(data) {
		$( "#mostrecent" ).html( data );
	});
});
