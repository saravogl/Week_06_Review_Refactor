<<<<<<< HEAD
<<<<<<< HEAD
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
=======
// function when click f to c button
=======

>>>>>>> GA-Chicago-FEWD6/master
$('#fahrenheit_to_celsius').on('click', function() {

  var temp = parseFloat($('#temperature').val());

  var convertedTemp = (temp - 32) * 5/9;

  backgroundChange(temp);

  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
<<<<<<< HEAD
  // if statement — if the value of var temp is not a number
>>>>>>> GA-Chicago-FEWD6/master
=======
>>>>>>> GA-Chicago-FEWD6/master
  if (isNaN(temp)) {

    addError();
<<<<<<< HEAD
<<<<<<< HEAD

 // otherwise if a valid number is inputted, the #result (i.d.) will read "tempF = tempC"

=======
    // otherwise (if it is a number)
>>>>>>> GA-Chicago-FEWD6/master
=======

>>>>>>> GA-Chicago-FEWD6/master
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
<<<<<<< HEAD
<<<<<<< HEAD

  // call backgroundChange function and passing the convertedTemp as an argument 

=======
  // calling the backgroundChange function and passing the convertedTemp as an arg
>>>>>>> GA-Chicago-FEWD6/master
=======

>>>>>>> GA-Chicago-FEWD6/master
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

<<<<<<< HEAD
function backgroundChange(temp) {

// select body tag, remove added classes: $('body').removeClass() also works!

  $('body').attr('class', '');

<<<<<<< HEAD
// if temp is less than 50, add 'cold' class

  if (temp < 50) {

    $('body').addClass('cold');

// else if temp is greater than 50, less than 70, add 'mild' class

  } else if (temp >= 50 && temp <= 70) {

    $('body').addClass('mild');

    // otherwise, if the temp is greater than 70, add the 'hot' class

  } else if (temp > 70) {
=======
function backgroundChange(poop) {
  // select body tag and clear out the classes
  $('body').removeClass();
  // if temp is less than 50 add class cold
  if (poop < 50) {
=======
function backgroundChange(temp) {

  $('body').attr('class', '');

  if (temp < 50) {
>>>>>>> GA-Chicago-FEWD6/master

    $('body').addClass('cold');

  } else if (temp >= 50 && temp <= 70) {

    $('body').addClass('mild');
<<<<<<< HEAD
    // otherwise if temp is greater than 70 add class of hot to body
  } else if (poop > 70) {
>>>>>>> GA-Chicago-FEWD6/master
=======

  } else if (temp > 70) {
>>>>>>> GA-Chicago-FEWD6/master

    $('body').addClass('hot');

  }
}

<<<<<<< HEAD
<<<<<<< HEAD
// defining an addError funtion; no parameters.  

function addError() {

  // adding error class to the element with the id temperature. 

  $('#temperature').addClass('error');

  // selecting .error-message and fadding it in, and changing the html t an error message. 

=======
// defining an add error function
=======

>>>>>>> GA-Chicago-FEWD6/master
function addError() {

  $('#temperature').addClass('error');
<<<<<<< HEAD
  // select .error-message and fadding it in, and changing the html to an error message
>>>>>>> GA-Chicago-FEWD6/master
=======

>>>>>>> GA-Chicago-FEWD6/master
  $('.error-message').fadeIn(500).html('Please enter a value.');

}

<<<<<<< HEAD
<<<<<<< HEAD
// clear out error styles

function clearError() {

  // hiding the error message by fading out

  $('.error-message').fadeOut(500);

  // removing the error class

=======
// clear out the error styles
=======

>>>>>>> GA-Chicago-FEWD6/master
function clearError() {

  $('.error-message').fadeOut(500);
<<<<<<< HEAD
  // removing the error class
>>>>>>> GA-Chicago-FEWD6/master
=======

>>>>>>> GA-Chicago-FEWD6/master
  $('#temperature.error').removeClass('error');

}

<<<<<<< HEAD
<<<<<<< HEAD
 // once you start typing, run the following code: 

$('#temperature').on('keyup', function() {

// changing the result to display nothing

  $('#result').html('');

// run the clearError function

=======
// once they start typing run the following code
=======

>>>>>>> GA-Chicago-FEWD6/master
$('#temperature').on('keyup', function() {

  $('#result').html('');
<<<<<<< HEAD
  // run the clear error function
>>>>>>> GA-Chicago-FEWD6/master
=======

>>>>>>> GA-Chicago-FEWD6/master
  clearError();

});
