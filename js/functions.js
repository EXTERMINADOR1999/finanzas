const btn_op1 = document.getElementById("op-tasa-1");
const calcular = document.getElementById("calcular"); 



calcular.addEventListener("click",(e) =>{
    let tasa_ei = document.getElementById("tasa-ei").value;
    let porcentaje = parseFloat(tasa_ei);
 
    let lista1 = document.getElementById("lista1").value;
    let lista2 = document.getElementById("lista2").value;
    let resultado;
    let Mensual=30;

    //   if(lista1 == "Diaria" && lista2 == "Mensual"){
        resultado = Math.pow(1+(porcentaje/100),Mensual) 
        // alert(resultado);
    //   }

      document.getElementById("resultado").innerHTML = resultado; 
      e.preventDefault();
});

function Maximo (obj){
    if(obj.value.length > obj.maxLength){
        obj.value = obj.value.slice(0, obj.maxLength)
    }
}
// function mostrarResultado(e)

// function calculoTasa(periodo){
//     if(periodo )


// }