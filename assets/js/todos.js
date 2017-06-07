//check off specific todos by clicking

$('ul').on('click', 'li', function() {
  //if li is gray
  $(this).toggleClass('completed')
});
//click on x to delete todo
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove()
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val('');
    //create new li and add to ul
    $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + '</li>')
    //takes a string of elements and append them
  }
  //enter is 13
});

$('.fa-plus').click(function() {
  $("input[type='text']").fadeToggle();
});