$('#img1').click(function() {
  $(this).fadeOut(1000);
});

$('#img2').click(function() {
  $(this).fadeOut(1000, function() {
    $(this).fadeIn(500);
  });
});

$('#img3').click(event => {
  $(event.currentTarget).fadeOut(1000, () => {
    $(event.currentTarget).fadeIn(1000);
  });
});