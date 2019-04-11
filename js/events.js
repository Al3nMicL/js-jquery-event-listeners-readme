//define functions here

// Task 1
function getIt (){
	$('p').on('click', function(){
		alert("Hey!");
	});
}

// Task 2
function frameIt (){
	$('img').on('load', function(){
		$(this).addClass('tasty');
	});
}

// Task 3
function pressIt (){
	$('#typing').on('keydown', function(event){
		if (event.which == 71) {
			alert('you pressed the g key!');
		}
	});	
}

// Task 4
function submitIt (){
	$('form').on('submit', function(){
		alert('Your form is going to be submitted now.');
	})	
}

$(document).ready(function(){

// call functions here
getIt(); // Task 1

frameIt(); // Task 2

pressIt(); // Task 3

submitIt(); // Task 4

});
