
$( document ).ready( function() {


	$(".getblog").click(function () {
        	var addressValue = $(this).attr("name");
        	$.get(addressValue,function(data) {
			$( "#mostrecent" ).html( data );
		});

    	});

	$.get('/blogs/2017/Simulate-data-illegal-fishing.html', function(data) {
		$( "#mostrecent" ).html( data );
	});
});
