$('#mp').on('input', function() {

  $('#ps').show();
    var p = $('#mp').val();
    var force = 0;

    // Check for minimum length of 8 characters
    if (p.length >= 8) {
        force += 1;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(p)) {
      force += 1;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(p)) {
      force += 1;
    }

    // Check for numbers
    if (/\d/.test(p)) {
      force += 1;
    }

    // Check for special characters
    if (/[$-/:-?{-~!@"^_`\[\]]/.test(p)) {
        force += 1;
    }

    
    $('#ps').val(force);

    if(force == 5) {
        $('#l4').hide();
        $('#mpco').prop('disabled', false); 
        
        $('#mpco').blur(function(){
            if($('#mp').val()==$('#mpco').val())  $('#l5').html("  Vérification réussie").show().css("color","green");
            else $('#l5').html("  Vérification échouée").show().css("color","red");
        
        });
        
    }

    else {
      $('#mpco').prop('disabled', true); 
      $('#l5').hide();
    }


  });