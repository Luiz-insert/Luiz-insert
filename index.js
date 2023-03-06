//Botão Aparecer/Esconder QRCODE Instagram
let cardData1 = document.querySelector('.data-img');
let cardData2 = document.getElementById('data-img2');

//Botão Claro-Escuro
let btnReplaceCard = document.querySelectorAll('.button-details-data');
let btnLightDark = document.querySelector('.icon2');

//Menu lateral
let btnSide = document.querySelector('.icon1')
let side = document.querySelector('.lateral');

//
let i1Close = document.querySelector('.icon1-close')

//Barra de progresso
const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = document.documentElement.scrollTop;

  const scrolled = scrollTop / scrollHeight * 100;
  progressBar.style.width = `${scrolled}%`;
});







//Botão Claro-Escuro (codigo)

btnLightDark.addEventListener('click' , function (){
    let body = document.querySelector('.body');
    let dataImg = document.querySelector('.data-img');
    let progressBar = document.querySelector('.progress-bar');
    let titleWelcome = document.querySelector('.title-welcome');
    let mainContainer = document.querySelector('.main-container');
    let header = document.querySelector('.header');
    let img = document.querySelector('.img');
    let aItem = document.querySelectorAll('.a-item');
    let cardCompetence = document.querySelector('.card-competence');
    let titleCardContact = document.querySelector('.title-card-contact');
    let msg = document.querySelector('.msg');

    btnLightDark.classList.toggle('icon2-alter')

    body.classList.toggle('body-alter');
    progressBar.classList.toggle('progress-bar-alter');
    header.classList.toggle('header-alter');
    dataImg.classList.toggle('data-img-alter');
    titleWelcome.classList.toggle('title-welcome-alter');
    mainContainer.classList.toggle('main-container-alter')
    aItem[0].classList.toggle('a-item-alter');
    aItem[1].classList.toggle('a-item-alter');
    aItem[2].classList.toggle('a-item-alter');
    aItem[3].classList.toggle('a-item-alter');
    aItem[4].classList.toggle('a-item-alter');
    aItem[5].classList.toggle('a-item-alter');
    cardCompetence.classList.toggle('card-competence-alter');
    titleCardContact.classList.toggle('title-card-contact-alter');
    msg.classList.toggle('msg-alter');


})

btnReplaceCard[0].onclick = function () {
    cardData1.style.display = 'none';
    cardData2.style.display = 'unset';
}

btnReplaceCard[1].onclick = function () {
    cardData1.style.display = 'unset';
    cardData2.style.display = 'none';
}

//Menu lateral (codigo)

btnSide.addEventListener("click", function() {
    side.classList.toggle('nullLateral');
    btnSide.classList.toggle('icon1-close');
})








console.log(btnReplaceCard[0]);
console.log(btnReplaceCard[1]);
