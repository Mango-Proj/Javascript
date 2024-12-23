$('#img1').click(function() {
  console.log('#img1-1', $(this));
  $(this).hide(1000, function() {
    console.log('#img1-2', $(this));
    $(this).show(1000);
  });
});

$('#img2').click(() => {
  console.log('#img2-1', $(this));
  $('#img2').hide(1000, () => {
    console.log('#img2-2', $(this));
    $(this).show(1000); // 수행되지 않음 -> 왜?: this가 가리키고 있는 것이 최상위 객체인 window이기 때문 (화살표 함수 사용이 원인)
  });
});

$('#img3').click(event => {
  console.log(event);
  const target = $(event.currentTarget);
  //const target = $('#img3');
  target.hide(1000, () => {
    target.show(1000);
  });
});