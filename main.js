window.alert('Site em desenvolvimento, recursos e links podem não funcionar corretamente')
//Alerta o cliente com uma ferramenta da janela do navegador que visualmente se altera de acordo com o mesmo


var alteraVersao = document.querySelector("#version").innerHTML = "v0.9_21/06/22_under development";
//Altera a string de todos os paragrafos com #version.*

const tel = document.getElementById('tel') // Seletor do campo de telefone

/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( tel ){
	return document.getElementById( tel );
}
window.onload = function(){
	id('tel').onkeyup = function(){
		mascara( this, mtel );
	}
}

















        
        
        

