qs('#postcode').onclick = function() {
    //생성 후 별도의 변수에 할당 x??? 메모리 문제 없을까??? 해당 창을 끄고 나면 알아서 메모리가 해제되는 구조?
    new daum.Postcode({
        oncomplete: function (data) {
        qs('input[name="postcode"]').value = data.zonecode;
        qs('input[name="addr1"]').value = data.roadAddress;
        }
    }).open();
};

qs('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = Array.from(
        new FormData(event.target),
        function (query) {
        console.log(query, query.join('='));
        return query.join('=');
        }
    ).join('&');

    console.log(formData);
});

function qs(selector) {
    return document.querySelector(selector);
}