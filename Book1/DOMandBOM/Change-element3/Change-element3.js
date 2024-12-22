const myModal = new bootstrap.Modal('#myModal');
const figures = document.querySelectorAll('figure');
const modalBody = document.querySelector('#myModal .modal-body');

for(let figure of figures){
    figure.addEventListener('click',function(){
        console.log(figure);
        console.log(figure.outerHTML);
        console.log(figure.innerHTML);
        console.log(typeof figure, typeof figure.outerHTML, typeof figure.innerHTML);

        modalBody.innerHTML = figure.outerHTML;
        myModal.show();
    });
}