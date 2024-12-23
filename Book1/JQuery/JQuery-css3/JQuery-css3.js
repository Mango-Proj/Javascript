$('li.list-group-item').click(function() {
  // $(this).addClass('active');
  // $(this).siblings().removeClass('active');

  $(this).addClass('active').siblings().removeClass('active');
});