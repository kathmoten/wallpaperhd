// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
})()

var filled_list = {};
$('select').each(function() {
    var total_list 	= $(this).find('option').length;
    $(this).find('option').each(function (index) {
        // Remove if duplicate else save in Array
        if(filled_list[this.text]){
            $(this).remove();
        }
        else{
            filled_list[this.text] = this.value;
        }

        // Check If Last Row, Then Flush Saved Data for new Selectbox
        if (index === (total_list - 1)){
            filled_list = {};
        }
    });
});

$(document).ready(function($) {
    $('.navbar-xbootstrap').click(function() {
        $('.nav-xbootstrap').toggleClass('visible');
    });
});