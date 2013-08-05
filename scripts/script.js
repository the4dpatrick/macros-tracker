$(document).ready(function(){
	$('button').click(function(){
		var subtract = parseInt($('#subtract').val(), 10);
		var current = 1000;
		var newVal = current - subtract; 
		$('p').effect('bounce');
		$('.number p').html(newVal);
	});
	$('.edit').editable('http://www.example.com/save.php');
});