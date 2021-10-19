function openPopup(){
    let popUp = document.querySelector(".popup");
    
    popUp.classList.add('show');
}

function init() {
    openPopup();
    //closePopup();
}

function closePopup() {
    let popUp = document.querySelector(".popup");

    popUp.classList.remove('show');
}

function validationPopUp() {
    let nome = document.querySelector('.form__text__input');
    const pError = 'O nome precisa ter mais de dois caracteres';
    if (nome.lenght == 0){
        
    }
}

document.addEventListener('DOMContentLoaded', function () {
    init();
});

document.addEventListener("", function () {
    validationPopUp();
});