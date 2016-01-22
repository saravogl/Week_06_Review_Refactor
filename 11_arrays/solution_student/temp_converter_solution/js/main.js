// when a user clicks the "F to C" button, the following function happens: 

$('#fahrenheit_to_celsius').on('click', function() {

// "temp" has been defined as a variable; parseFloat converts the input value from a string to a float 

  var temp = parseFloat($('#temperature').val());

// covertedTemp has been defined as a variable; the "F to C" formula has been applied 

  var convertedTemp = (temp - 32) * 5/9;

  // call backgroundChange function and pass variable temp as argument 

  backgroundChange(temp);

  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

  // if var temp is "not a number", run the error function 
  if (isNaN(temp)) {

    addError();

 // otherwise if a valid number is inputted, the #result (i.d.) will read "tempF = tempC"

  } else {

    $('#result').html(temp + "&deg;F = " + convertedTemp + "&deg;C");

  }
});

// when a user clicks the "F to C" button, the following function happens: 

$('#celsius_to_fahrenheit').on('click', function() {

  // "temp" has been defined as a variable; parseFloat converts it to a decimal

  var temp = parseFloat($('#temperature').val());

  // covertedTemp has been defined as a variable; the "C to F" formula has been applied 

  var convertedTemp = temp * 9 / 5 + 32;

  // call backgroundChange function and passing the convertedTemp as an argument 

  backgroundChange(convertedTemp);

  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

   // if input is "not a number" an error message is added to the display

  if (isNaN(temp)) {

    addError();

 // otherwise if a valid number is inputted, the result will read "tempC = tempF"

  } else {

    $('#result').html(temp + "&deg;C = " + convertedTemp + "&deg;F");

  }
});

// calls the backgroundChange function, temp is the parameter (NOTE: this temp is different than the temp variable defined earlier); background is altered to cold, mild, or hot classes based on the defined temp. 

function backgroundChange(temp) {

// select body tag, remove added classes: $('body').removeClass() also works!

  $('body').attr('class', '');

// if temp is less than 50, add 'cold' class

  if (temp < 50) {

    $('body').addClass('cold');

// else if temp is greater than 50, less than 70, add 'mild' class

  } else if (temp >= 50 && temp <= 70) {

    $('body').addClass('mild');

    // otherwise, if the temp is greater than 70, add the 'hot' class

  } else if (temp > 70) {

    $('body').addClass('hot');

  }
}

// defining an addError funtion; no parameters.  

function addError() {

  // adding error class to the element with the id temperature. 

  $('#temperature').addClass('error');

  // selecting .error-message and fadding it in, and changing the html t an error message. 

  $('.error-message').fadeIn(500).html('Please enter a value.');

}

// clear out error styles

function clearError() {

  // hiding the error message by fading out

  $('.error-message').fadeOut(500);

  // removing the error class

  $('#temperature.error').removeClass('error');

}

 // once you start typing, run the following code: 

$('#temperature').on('keyup', function() {

// changing the result to display nothing

  $('#result').html('');

// run the clearError function

  clearError();

});
