function abrirToggle(){
    document.getElementById('menu2').style.height="100%";
    document.getElementById('menu2').style.width="100%";
}
function fecharToggle(){
    document.getElementById('menu2').style.height="0%";
    document.getElementById('menu2').style.width="0%";
  }

function abrirModal(){
    let modal = document.querySelector('.modal')
    modal.style.display = 'block';
}
function fecharModal(){
    let modal = document.querySelector('.modal')
    modal.style.display = 'none';
}

function validar(){
    if(document.getElementById('nomeCompleto').value=="" || document.getElementById('email').value ==""){
        document.getElementById('resultado').innerHTML="Preencha os campos acima!";
        document.getElementById('resultado').style.color="red";

        if(document.getElementById('nomeCompleto').value=="" && document.getElementById('email').value == ""){
          document.getElementById('nomeCompleto').style.border="solid 1px red";
          document.getElementById('email').style.border="solid 1px red";
          
        }else if(document.getElementById('email').value ==""){
            document.getElementById('email').style.border="solid 1px red";
        }else if(document.getElementById('nomeCompleto').value ==""){
            document.getElementById('nomeCompleto').style.border="solid 1px red";
        }


    }else{
        document.getElementById('nomeCompleto').style.border="solid 1px white";
        document.getElementById('email').style.border="solid 1px white";
        document.getElementById('resultado').style.color="white";
        document.getElementById('resultado').innerHTML="Tudo certo, muito obrigado!";
    }
}