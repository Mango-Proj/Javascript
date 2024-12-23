$('#img1').click(function() {
  $(this).fadeTo(1000, 0.5);
});

$('#img2').click(function() {
  $(this).fadeTo(1000, 0.2, function() {
    $(this).fadeTo(1000, 0.7);
  });
});

$('#img3').click(function() {
  $(this).fadeToggle(1000, function() {
    $(this).fadeToggle(500);
  });
});