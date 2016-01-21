// function when click f to c button
$('#fahrenheit_to_celsius').on('click', function() {
  // define temp variable as input value converted from string to float
  var temp = parseFloat($('#temperature').val());
  // define converted temperature as the formula for the conversion
  var convertedTemp = (temp - 32) * 5/9;
  // call backgroundChange function and pass var temp as arg
  backgroundChange(temp);

  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  // if statement — if the value of var temp is not a number
  if (isNaN(temp)) {
    // run add error function
    addError();
    // otherwise (if it is a number)
  } else {
    // select the element with an id of result and print the original and converted temp
    $('#result').html(temp + "&deg;F = " + convertedTemp + "&deg;C");

  }
});


$('#celsius_to_fahrenheit').on('click', function() {

  var temp = parseFloat($('#temperature').val());

  var convertedTemp = temp * 9 / 5 + 32;
  // calling the backgroundChange function and passing the convertedTemp as an arg
  backgroundChange(convertedTemp);

  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  if (isNaN(temp)) {

    addError();

  } else {

    $('#result').html(temp + "&deg;C = " + convertedTemp + "&deg;F");

  }
});


function backgroundChange(poop) {
  // select body tag and clear out the classes
  $('body').removeClass();
  // if temp is less than 50 add class cold
  if (poop < 50) {

    $('body').addClass('cold');
    // else if the temp is greater than or eqal to 50, AND less than 70 add class mild to body
  } else if (poop >= 50 && poop <= 70) {

    $('body').addClass('mild');
    // otherwise if temp is greater than 70 add class of hot to body
  } else if (poop > 70) {

    $('body').addClass('hot');

  }
}

// defining an add error function
function addError() {
  // adding the error class to the element with id temperature
  $('#temperature').addClass('error');
  // select .error-message and fadding it in, and changing the html to an error message
  $('.error-message').fadeIn(500).html('Please enter a value.');

}

// clear out the error styles
function clearError() {
  // hiding the error message
  $('.error-message').fadeOut(500);
  // removing the error class
  $('#temperature.error').removeClass('error');

}

// once they start typing run the following code
$('#temperature').on('keyup', function() {
  // change result to display nothing
  $('#result').html('');
  // run the clear error function
  clearError();

});
