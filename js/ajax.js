function ajaxCall(form) {
    var action_url = form.attr('action');
    var form_data = new FormData(form[0]) ;
    form_data.append('_csrf', $('meta[name="csrf-token"]').attr('content'));
    
    $(':input[type="submit"]').prop('disabled', true);

    $.ajax({
        type: "post",
        url: action_url,
        cache:false,
        contentType: false,
        processData: false,
        data: form_data,
        dataType: 'json',
        success: function(json) {	
            if(json.success === true){
                if(json.data){
                    alert('Success: ' + json.data);
                    window.location.href = json.redirect;
                }
                else {
                    window.location.href = json.redirect;
                }
            }
            else {
                if(json.data) { alert(json.data); } else { alert(json); }
                $(':input[type="submit"]').prop('disabled', false);
            }
        },
        error: function(xhr, status, error){
            alert("Exception in request, retry");
            $(':input[type="submit"]').prop('disabled', false);
        }
    });
}

function ajaxdeleteSubmit(form_identifier){
    $(form_identifier).submit( function(event){
        event.preventDefault();
        event.stopPropagation();

        var form = $(this);
        if (form[0].checkValidity() === true){
            if (confirm('Are you sure you want to report this wallpaper?')) {
                ajaxCall(form);
            }
        }
        form[0].classList.add('was-validated');
    });
}