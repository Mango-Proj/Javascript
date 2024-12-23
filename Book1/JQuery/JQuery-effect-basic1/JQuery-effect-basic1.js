// $(선택자).hide([duration][, complete]);

$('#img1').click(function() {
  $('#img1').hide();
});

$('#img2').click(function() {
  $(this).hide(1000);
});

$('#img3').click(function() {
  $(this).hide(1000, function() {
    console.log('이미지 안보임');
  });
});

/*
// 바닐라 자바스크립트
document.getElementById('box').onclick = function() {
  this.style.display = 'none';
}

// jQuery
$('#box').click(function() {
  $(this).hide();
}); 
*/