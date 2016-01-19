
$('#fahrenheit_to_celsius').on('click', function() {

  var temp = parseFloat($('#temperature').val());

  var convertedTemp = (temp - 32) * 5/9;

  backgroundChange(temp);

  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  if (isNaN(temp)) {

    addError();

  } else {

    $('#result').html(temp + "&deg;F = " + convertedTemp + "&deg;C");

  }
});


$('#celsius_to_fahrenheit').on('click', function() {

  var temp = parseFloat($('#temperature').val());

  var convertedTemp = temp * 9 / 5 + 32;

  backgroundChange(convertedTemp);

  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  if (isNaN(temp)) {

    addError();

  } else {

    $('#result').html(temp + "&deg;C = " + convertedTemp + "&deg;F");

  }
});


function backgroundChange(temp) {

  $('body').attr('class', '');

  if (temp < 50) {

    $('body').addClass('cold');

  } else if (temp >= 50 && temp <= 70) {

    $('body').addClass('mild');

  } else if (temp > 70) {

    $('body').addClass('hot');

  }
}


function addError() {

  $('#temperature').addClass('error');

  $('.error-message').fadeIn(500).html('Please enter a value.');

}


function clearError() {

  $('.error-message').fadeOut(500);

  $('#temperature.error').removeClass('error');

}


$('#temperature').on('keyup', function() {

  $('#result').html('');

  clearError();

});
