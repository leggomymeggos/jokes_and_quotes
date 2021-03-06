function deliverMyForm(deliveree){
  
  var url = deliveree.attr("href");

  $.get( url ).done(function(response){
    // $('.modal').css({ 'height': $(document).innerHeight(), 'width': $(document).innerWidth() });
    $('.modal').show();
    $('#sign-in-sign-up').fadeIn(200);
    $("#sign-in-sign-up").html(response);
  });
}

function submitUser(user){
  var url, data;
  
  url = user.attr('action');
  data = user.serialize();

  $.post( url, data ).done(function(response){
    if (response.user_error === true) {
      $('#sign-in-sign-up').html(response.sign_in_html);
    } else {
      location.reload();
    }
  });
}

$(document).ready(function(){
  $("body").on("click", ".sign_in_link", function(e) {
    e.preventDefault();
    deliverMyForm($(this));
  });

  $("body").on("click", ".sign_up_link", function(e) {
    e.preventDefault();
    deliverMyForm($(this));
  });

  $("#sign-in-sign-up").on('submit', '.user-form', function(e){
    e.preventDefault();
    submitUser($(this));
  });

  $('#sign-in-sign-up').on('click', '.close-modal', function(e){
    $('.modal').hide();
    $('#sign-in-sign-up').hide();
  })
});
