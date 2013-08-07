$(document).ready(function(){    
    $('button').click(function(){
        var $button = $(this);
        var subtract = parseInt($button.siblings('input').val(), 10);
        var $currentP = $button.siblings('.number').children('p');
        var current = parseInt($currentP.text(), 10);
        var newVal = current - subtract;
        var $history = $button.siblings('.wrap').children('.history');
        if (isNaN(subtract)) {
            alert("Please enter in a number");
        } else {
            $currentP.effect('bounce', function() {
                $currentP.text(newVal);
                $(this).show();
            });
            $history.append("<p>"+subtract+"</p>");
        }
    });
	var preset = function(val1, val2, val3, val4) {
		//set up the subtracting and current variables
        var subCal = val1;
        var subPro = val2;
        var subCarbs = val3;
        var subFat = val4;

        //retrieve current number then convert to a number
        var toNum = function(id) {
            return parseInt($(id + ' .number').children('p').text(), 10);
        }
        var curCal = toNum('#calories');
        var curPro = toNum('#protein');
        var curCarbs = toNum('#carbs');
        var curFat = toNum('#fats');

        //create new values
        var newCal = curCal - subCal;
        var newPro = curPro - subPro;
        var newCarbs = curCarbs - subCarbs;
        var newFats = curFat - subFat;

        //apply new values
        var applyNew = function(id, newVal) {
            $(id + ' .number p').text(newVal);
        }
        //apply new values
        var applyHistory = function(id, val) {
            $(id + ' .history').append("<p>" + val + "</p>");
        }

        applyNew('#calories', newCal);
        applyNew('#protein', newPro);
        applyNew('#carbs', newCarbs);
        applyNew('#fats', newFats);

        applyHistory('#calories', subCal);
        applyHistory('#protein', subPro);
        applyHistory('#carbs', subCarbs);
        applyHistory('#fats', subFat);
	}
    $('#presets').click(function(){
        preset(120, 24, 3, 1);
    })
});