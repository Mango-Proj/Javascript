$('#img1').click(function() {
  $(this).slideUp();
});

$('#img2').click(function() {
  $(this).slideUp(1000, function() {
    $(this).slideDown(500);
  });
});

$('.col:eq(2)').click(event => {
  $(event.currentTarget).slideUp(1000).slideDown(1000);
});