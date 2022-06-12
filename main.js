var alteraVersao = document.querySelector("#version").innerHTML = "v0.7_19/05/22_under development";
//Não alterar*



//remove o estilo claro e consequentemente o codigo em cascata le o 2°//

    var removeStyle = document.querySelector("#estilo");
    
    var botaoClaroEscuro = document.querySelector(".bttLightDark");
    botaoClaroEscuro.addEventListener('click', updateButton);

function updateButton() {

  if (botaoClaroEscuro.value === 'Modo Claro') 
  {  
    botaoClaroEscuro.value = 'Modo Escuro';
    removeStyle.href = "/css/style2.css"    
  } 
  else 
  {
    botaoClaroEscuro.value = 'Modo Claro';
    removeStyle.href = "/css/style.css"
  }
}

















        
        
        

