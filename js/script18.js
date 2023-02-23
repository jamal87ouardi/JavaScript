$(document).ready(function() {
    $('#password').on('input', function() {
      var password = $(this).val();
      var strength = 0;

      // Check for minimum length of 8 characters
      if (password.length >= 8) {
        strength += 1;
      }

      // Check for uppercase letters
      if (/[A-Z]/.test(password)) {
        strength += 1;
      }

      // Check for lowercase letters
      if (/[a-z]/.test(password)) {
        strength += 1;
      }

      // Check for numbers
      if (/\d/.test(password)) {
        strength += 1;
      }

      // Check for special characters
      if (/[$-/:-?{-~!"^_`\[\]]/.test(password)) {
        strength += 1;
      }

      // Update the range value based on the strength
      var rangeValue = strength;
      $('#password-strength').val(rangeValue);
    });
  });