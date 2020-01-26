const btn_op1 = document.getElementById("op-tasa-1");
const calcular = document.getElementById("calcular"); 



calcular.addEventListener("click",(e) =>{
    let tasa_ei = document.getElementById("tasa-ei").value;
    let porcentaje = parseFloat(tasa_ei)/100.0;
 
    let lista1 = document.getElementById("lista1").value;
    let lista2 = document.getElementById("lista2").value;
    let resultado;
    let Año=1;
    let Diario=365;
    let Mensual=12;
    let Bimestre=6;
    let Trimestre=4;
    let Semestre=2;
    let Anual=1;
    let valores = [[1,"mensual",30],[]]

    //Diaria
    if(lista1 == "Diaria" && lista2 == "Diaria"){
      resultado = Math.pow(1+(porcentaje),Diario/Diario)-1
       
     }
       if(lista1 == "Diaria" && lista2 == "Mensual"){
        resultado = Math.pow(1+(porcentaje),Diario/Mensual)-1
         
       }
       else if(lista1 == "Diaria" && lista2 == "Bimestral"){
        resultado = Math.pow(1+(porcentaje),Diario/Bimestre)-1;
         
       }
       else if(lista1 == "Diaria" && lista2 == "Trimestral"){
            resultado = Math.pow(1+(porcentaje),Diario/Trimestre)-1;
            
       }
       else if(lista1 == "Diaria" && lista2 == "Semestral"){
        resultado = Math.pow(1+(porcentaje),Diario/Semestre)-1;
        
        }
        else if(lista1 == "Diaria" && lista2 == "Anual"){
          resultado = Math.pow(1+(porcentaje),Diario/Año)-1;
          
          }

      //Mensual

      else if(lista1 == "Mensual" && lista2 == "Diaria"){
        resultado = Math.pow(1+(porcentaje),Mensual/Diario)-1;
        
        }
        else if(lista1 == "Mensual" && lista2 == "Mensual"){
          resultado = Math.pow(1+(porcentaje),Mensual/Mensual)-1;
          
          }
        else if(lista1 == "Mensual" && lista2 == "Bimestral"){
          resultado = Math.pow(1+(porcentaje),Mensual/Bimestre)-1;
           
         }
         else if(lista1 == "Mensual" && lista2 == "Trimestral"){
              resultado = Math.pow(1+(porcentaje),Mensual/Trimestre)-1;
              
         }
         else if(lista1 == "Mensual" && lista2 == "Semestral"){
          resultado = Math.pow(1+(porcentaje),Mensual/Semestre)-1;
          
          }
          else if(lista1 == "Mensual" && lista2 == "Anual"){
            resultado = Math.pow(1+(porcentaje),Mensual/Año)-1;
            
            }
        //Bimestral
        
        else if(lista1 == "Bimestral" && lista2 == "Diaria"){
          resultado = Math.pow(1+(porcentaje),Bimestre/Diario)-1;
          
          }
          else if(lista1 == "Bimestral" && lista2 == "Mensual"){
            resultado = Math.pow(1+(porcentaje),Bimestre/Mensual)-1;
             
           }
           else if(lista1 == "Bimestral" && lista2 == "Bimestral"){
            resultado = Math.pow(1+(porcentaje),Bimestre/Bimestre)-1;
             
           }
           else if(lista1 == "Bimestral" && lista2 == "Trimestral"){
                resultado = Math.pow(1+(porcentaje),Bimestre/Trimestre)-1;
                
           }
           else if(lista1 == "Bimestral" && lista2 == "Semestral"){
            resultado = Math.pow(1+(porcentaje),Bimestre/Semestre)-1;
            
            }
            else if(lista1 == "Bimestral" && lista2 == "Anual"){
              resultado = Math.pow(1+(porcentaje),Bimestre/Año)-1;
              
              }
          //Trimestral

          else if(lista1 == "Trimestral" && lista2 == "Diaria"){
            resultado = Math.pow(1+(porcentaje),Trimestre/Diario)-1;
            
            }
            else if(lista1 == "Trimestral" && lista2 == "Mensual"){
              resultado = Math.pow(1+(porcentaje),Trimestre/Mensual)-1;
               
             }
             else if(lista1 == "Trimestral" && lista2 == "Bimestral"){
              resultado = Math.pow(1+(porcentaje),Trimestre/Bimestre)-1;
               
             }
             else if(lista1 == "Trimestral" && lista2 == "Trimestral"){
                  resultado = Math.pow(1+(porcentaje),Trimestre/Trimestre)-1;
                  
             }
             else if(lista1 == "Trimestral" && lista2 == "Semestral"){
              resultado = Math.pow(1+(porcentaje),Trimestre/Semestre)-1;
              
              }
              else if(lista1 == "Trimestral" && lista2 == "Anual"){
                resultado = Math.pow(1+(porcentaje),Trimestre/Año)-1;
                
                }
            //Semestral

            else if(lista1 == "Semestral" && lista2 == "Diaria"){
              resultado = Math.pow(1+(porcentaje),Semestre/Diario)-1;
              
              }
              else if(lista1 == "Semestral" && lista2 == "Mensual"){
                resultado = Math.pow(1+(porcentaje),Semestre/Mensual)-1;
                 
               }
               else if(lista1 == "Semestral" && lista2 == "Bimestral"){
                resultado = Math.pow(1+(porcentaje),Semestre/Bimestre)-1;
                 
               }
               else if(lista1 == "Semestral" && lista2 == "Trimestral"){
                    resultado = Math.pow(1+(porcentaje),Semestre/Trimestre)-1;
                    
               }
               else if(lista1 == "Semestral" && lista2 == "Semestral"){
                resultado = Math.pow(1+(porcentaje),Semestre/Semestre)-1;
                
                }
                else if(lista1 == "Semestral" && lista2 == "Anual"){
                  resultado = Math.pow(1+(porcentaje),Semestre/Año)-1;
                  
                  }
            //Anual

            else if(lista1 == "Anual" && lista2 == "Diaria"){
              resultado = Math.pow(1+(porcentaje),Año/Diario)-1;
              
              }
              else if(lista1 == "Anual" && lista2 == "Mensual"){
                resultado = Math.pow(1+(porcentaje),Año/Mensual)-1;
                 
               }
               else if(lista1 == "Anual" && lista2 == "Bimestral"){
                resultado = Math.pow(1+(porcentaje),Año/Bimestre)-1;
                 
               }
               else if(lista1 == "Anual" && lista2 == "Trimestral"){
                    resultado = Math.pow(1+(porcentaje),Año/Trimestre)-1;
                    
               }
               else if(lista1 == "Anual" && lista2 == "Semestral"){
                resultado = Math.pow(1+(porcentaje),Año/Semestre)-1;
                
                }
                else if(lista1 == "Anual" && lista2 == "Anual"){
                  resultado = Math.pow(1+(porcentaje),Año/Año)-1;
                  
                  }

      document.getElementById("resultado").innerHTML = resultado*100; 
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
