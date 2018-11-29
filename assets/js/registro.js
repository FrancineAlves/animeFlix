function valida_envio(){
    var valor_campo = document.getElementById("email").value;
    var valor_senha = document.getElementById("senha").value;
    var formulario  = document.getElementById("formEnvia");
 
    if( valor_campo.length > 1 && valor_senha.length > 1){
       formulario.submit();
    }else{
       alert("Preencha os campos");
    }
    var loginsalvo = valor_campo;
    localStorage.setItem('loginsalvo', loginsalvo);
    var senhasalvo = valor_senha;
    localStorage.setItem('senhasalvo', senhasalvo);
  }