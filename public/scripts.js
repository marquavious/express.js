
$(document).ready(function() {

   $( "#new-post" ).on( "submit", function( event ) {
       event.preventDefault();

       var post = $(this).serialize();

       $.post('/', post, function (data) {
           console.log(data)
           $('#posts').append("<li>" + data.body + "</li>");
           $('#new-post')[0].reset();
       });
   });
});
