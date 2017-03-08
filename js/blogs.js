
$( document ).ready( function() {

	$('.submen').click(function() {
		return false;
	});

	$(".getblog").click(function () {
		alert('yes')
        	var addressValue = $(this).attr("name");
        	$.get(addressValue,function(data) {
			$( "#mostrecent" ).html( data );
		});

    	});

	$.get('/blogs/2017/Mesoscale-data-science.html', function(data) {
		$( "#mostrecent" ).html( data );
	});
});
