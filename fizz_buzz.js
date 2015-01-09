
var number = prompt('Please enter a number!');

function fizzbuzz(number) {
	for (var i = 1; i <= number; i ++) {
		if (i % 3 == 0 && i % 5 == 0) {
			$('#fb').append('FizzBuzz');
			$('#fb').append('<br>');			
		}
		else if (i % 3 == 0) {
			$('#fb').append('Fizz');
			$('#fb').append('<br>');			
		} 
		else if (i % 5 == 0) {
			$('#fb').append('Buzz');
			$('#fb').append('<br>');			
		} else  {
			$('#fb').append(i);
			$('#fb').append('<br>');			
		}
		
	}
}

$(document).ready(function() {
	fizzbuzz(number);	
});






