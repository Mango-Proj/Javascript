$('#postcode').click(function() {
    new daum.Postcode({
        oncomplete: function (data) {
        $('input[name="postcode"]').val(data.zonecode);
        $('input[name="addr1"]').val(data.roadAddress);
        }
    }).open();
});

$('form').submit(function (event) {
    event.preventDefault();
    const formData = $(this).serialize();
    console.log(decodeURIComponent(formData));
});