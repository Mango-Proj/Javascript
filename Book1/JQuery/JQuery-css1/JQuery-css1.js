 // $(선택자).css(속성, 속성값);
  // $(선택자).css({속성:속성값, 속성:속성값, ...});

  $('#one').click(function() {
    console.log($(this).css('background-color'));
  });

  $('#two').click(function() {
    $(this).css('background-color', 'lightcoral');
  });

  $('#three').click(function() {
    $(this).css({'background-color': 'lightcoral', color: '#fff'});
  });

  $('#four').click(function() {
    $(this).css({backgroundColor: 'lightgreen', color: 'navy'});
  });

  $('#five').click(function() {
    $(this).css({
      backgroundColor: 'lightgreen',
      fontWeight: 'bold',
      color: 'red'
    });
  });