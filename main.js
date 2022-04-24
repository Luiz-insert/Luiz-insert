lert('Site em desenvolvimento, projetos e recursos como contraste e modo claro/escuro não estão finalizados')

var button_MudaCor = document.querySelector("#mudarCor");

button_MudaCor.addEventListener('click', function (event) {

  if (button_MudaCor.classList.contains('changeColor')) {
    button_MudaCor.classList.remove('changeColor');
  } else {
    button_MudaCor.classList.add('changeColor');
  }

}, false);



        
        
        

