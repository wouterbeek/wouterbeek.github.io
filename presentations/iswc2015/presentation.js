$( document ).ready(function() {

	//draw header stuff. Need to dynamically insert via javascript, because we want the header added once when doing a proper presentation, and we want to add the header to all pages when exporting to pdf
	var header = '<div class="bottomBar">'+
		'<img class="vuLogo" src="imgs/VUlogo_EN_Blauw_FC_tcm9-201387.png"</div>'+
		'<img class="commitLogo" src="imgs/commit_logo_grey.png">'+
		'<img class="d2sLogo" src="imgs/elaborate-logo-150dpi.png">'+
		'</div>';
	if ( window.location.search.match( /print-pdf/gi ) ) {
		$('section').append(header);
	}
	else {
		$('div.reveal').append(header);
	}

});
