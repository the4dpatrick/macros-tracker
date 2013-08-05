$(document).ready(function(){
    $('button').click(function(){
        var $button = $(this);
        var subtract = parseInt($button.siblings('input').val(), 10);
        var $currentP = $button.siblings('.number').children('p');
        var current = parseInt($currentP.text(), 10);
        var newVal = current - subtract; 
		if (isNaN(subtract)) {
			alert("Please enter in a number");
		} else {
			$currentP.effect('bounce', function() {
	            $currentP.text(newVal);
	            $(this).show(); 
	        });
		}
    });
});