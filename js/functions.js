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

      document.getElementById("resultado").innerHTML = resultado*100+"% "+lista2; 
      e.preventDefault();
});

/*
  calcular.addEventListener("click",(e) =>{
    let tasa_n = document.getElementById("tasa-n").value;
    let porcentaje = parseFloat(tasa_n)/100.0;
    let lista1 = document.getElementById("lista1").value;
    let lista2 = document.getElementById("lista2").value;
    let resultado;
    let Año=1;
    let Mensual=12;
    let Bimestre=6;
    let Trimestre=4;
    let Semestre=2;
    let Anual=1;
    let resultado1;
    let resultado2;
    let resultado3;

  //Mes
    //MV-BV
    if(lista1 == "MV" && lista2 == "BV"){
      resultado1= porcentaje/Mensual
        resultado2 = Math.pow(1+(resultado1),Mensual/Bimestre)
        resultado3= resultado2*Bimestre
        resultado=(resultado3)
    }
      //MV-TV
      if(lista1 == "MV" && lista2 == "TV"){
        resultado1= porcentaje/Mensual
        resultado2 = Math.pow(1+(resultado1),Mensual/Trimestre)
        resultado3= resultado2*Trimestre
        resultado=(resultado3)
        }
      //MV-SV
      else if(lista1 == "MV" && lista2 == "SV"){
        resultado1= porcentaje/Mensual
        resultado2 = Math.pow(1+(resultado1),Mensual/Semestre)
        resultado3= resultado2*Semestre
        resultado=(resultado3)
        }
      //MV-AV
      else if(lista1 == "MV" && lista2 == "AV"){
        resultado1= porcentaje/Mensual
        resultado2 = Math.pow(1+(resultado1),Mensual/Anual)
        resultado3= resultado2*Anual
        resultado=(resultado3)
        }
      //Mes Vencido a Efectivo Anua
      else if(lista1 == "MV" && lista2 == "MV"){
         resultado = porcentaje
        }


    //Bimestre
    //Bimestre Vencido a Efectivo Mensual
    if(lista1 == "BV" && lista2 == "MV"){
      resultado1= porcentaje/Bimestre
        resultado2 = Math.pow(1+(resultado1),Bimestre/Mensual)
        resultado3= resultado2*Mensual
        resultado=(resultado3)
    }
      //Bimestre Vencido a Efectivo Bimestral
      if(lista1 == "BV" && lista2 == "TV"){
        resultado1= porcentaje/Bimestre
        resultado2 = Math.pow(1+(resultado1),Bimestre/Trimestre)
        resultado3= resultado2*Trimestre
        resultado=(resultado3)
        }
      //Bimestre Vencido a Efectivo Trimestral
      else if(lista1 == "BV" && lista2 == "SV"){
        resultado1= porcentaje/Bimestre
        resultado2 = Math.pow(1+(resultado1),Bimestre/Semestre)
        resultado3= resultado2*Semestre
        resultado=(resultado3)
        }
      //Bimestre Vencido a Efectivo Semestral
      else if(lista1 == "BV" && lista2 == "AV"){
        resultado1= porcentaje/Bimestre
        resultado2 = Math.pow(1+(resultado1),Bimestre/Anual)
        resultado3= resultado2*Anual
        resultado=(resultado3)
        }
      //Bimestre Vencido a Efectivo Anual
      else if(lista1 == "BV" && lista2 == "BV"){
        resultado = porcentaje
        }

    //Trimestre
    //Trimestre Vencido a Efectivo Mensual
    if(lista1 == "TV" && lista2 == "MV"){
      resultado1= porcentaje/Trimestre
        resultado2 = Math.pow(1+(resultado1),Trimestre/Mensual)
        resultado3= resultado2*Mensual
        resultado=(resultado3)
    }
      //Trimestre Vencido a Efectivo Bimestral
      if(lista1 == "TV" && lista2 == "BV"){
        resultado1= porcentaje/Trimestre
        resultado2 = Math.pow(1+(resultado1),Trimestre/Bimestre)
        resultado3= resultado2*Bimestre
        resultado=(resultado3)
        }
      //Trimestre Vencido a Efectivo Trimestral
      else if(lista1 == "TV" && lista2 == "SV"){
        resultado1= porcentaje/Trimestre
        resultado2 = Math.pow(1+(resultado1),Trimestre/Semestre)
        resultado3= resultado2*Semestre
        resultado=(resultado3)
        }
      //Trimestre Vencido a Efectivo Semestral
      else if(lista1 == "TV" && lista2 == "AV"){
        resultado1= porcentaje/Trimestre
        resultado2 = Math.pow(1+(resultado1),Trimestre/Anual)
        resultado3= resultado2*Anual
        resultado=(resultado3)
        }
      //Trimestre Vencido a Efectivo Anual
      else if(lista1 == "TV" && lista2 == "TV"){
        resultado = porcentaje
        }

    //Semestre
    //Semestre Vencido a Efectivo Mensual
    if(lista1 == "SV" && lista2 == "MV"){
      resultado1= porcentaje/Semestre
        resultado2 = Math.pow(1+(resultado1),Semestre/Mensual)
        resultado3= resultado2*Mensual
        resultado=(resultado3)
    }
      //Semestre Vencido a Efectivo Bimestral
      if(lista1 == "SV" && lista2 == "BV"){
        resultado1= porcentaje/Semestre
        resultado2 = Math.pow(1+(resultado1),Semestre/Bimestre)
        resultado3= resultado2*Bimestre
        resultado=(resultado3)
        }
      //Semestre Vencido a Efectivo Trimestral
      else if(lista1 == "SV" && lista2 == "TV"){
        resultado1= porcentaje/Semestre
        resultado2 = Math.pow(1+(resultado1),Semestre/Trimestre)
        resultado3= resultado2*Trimestre
        resultado=(resultado3)
        }
      //Semestre Vencido a Efectivo Semestral
      else if(lista1 == "SV" && lista2 == "AV"){
        resultado1= porcentaje/Semestre
        resultado2 = Math.pow(1+(resultado1),Semestre/Anual)
        resultado3= resultado2*Anual
        resultado=(resultado3)
        }
      //Semestre Vencido a Efectivo Anual
      else if(lista1 == "SV" && lista2 == "SV"){
        resultado = porcentaje
        }

    //Año
    //Año Vencido a Efectivo Mensual
    if(lista1 == "AV" && lista2 == "MV"){
      resultado1= porcentaje/Anual
        resultado2 = Math.pow(1+(resultado1),Anual/Mensual)
        resultado3= resultado2*Mensual
        resultado=(resultado3)
    }
      //Año Vencido a Efectivo Bimestral
      if(lista1 == "AV" && lista2 == "BV"){
        resultado1= porcentaje/Anual
        resultado2 = Math.pow(1+(resultado1),Anual/Bimestre)
        resultado3= resultado2*Bimestre
        resultado=(resultado3)
        }
      //Año Vencido a Efectivo Trimestral
      else if(lista1 == "AV" && lista2 == "TV"){
        resultado1= porcentaje/Anual
        resultado2 = Math.pow(1+(resultado1),Anual/Trimestre)
        resultado3= resultado2*Trimestre
        resultado=(resultado3)
        }
      //Año Vencido a Efectivo Semestral
      else if(lista1 == "AV" && lista2 == "SV"){
        resultado1= porcentaje/Anual
        resultado2 = Math.pow(1+(resultado1),Anual/Semestre)
        resultado3= resultado2*Semestre
        resultado=(resultado3)
        }
      //Año Vencido a Efectivo Anual
      else if(lista1 == "AV" && lista2 == "AV"){
        resultado = porcentaje
        }

      document.getElementById("resultado").innerHTML = resultado.toFixed(3)*100+"% "+lista2; 
      e.preventDefault();
  });*/

calcular.addEventListener("click",(e) =>{
    let tasa_n = document.getElementById("tasa-n").value;
    let porcentaje = parseFloat(tasa_n)/100.0;
    let lista1 = document.getElementById("lista1").value;
    let lista2 = document.getElementById("lista2").value;
    let resultado;
    let Año=1;
    let Mensual=12;
    let Bimestre=6;
    let Trimestre=4;
    let Semestre=2;
    let Anual=1;
    let resultado1;
    let resultado2;
    let resultado3;
    

  //Mes
    //MV-BV
    if(lista1 == "MV" && lista2 == "BV"){
      resultado1= porcentaje/Mensual
        resultado2 = Math.pow(1+(resultado1),Mensual/Bimestre)-1
        resultado3= resultado2*Bimestre
        resultado=(resultado3)
    }
      //MV-TV
      if(lista1 == "MV" && lista2 == "TV"){
        resultado1= porcentaje/Mensual
        resultado2 = Math.pow(1+(resultado1),Mensual/Trimestre)-1
        resultado3= resultado2*Trimestre
        resultado=(resultado3)
        }
      //MV-SV
      else if(lista1 == "MV" && lista2 == "SV"){
        resultado1= porcentaje/Mensual
        resultado2 = Math.pow(1+(resultado1),Mensual/Semestre)-1
        resultado3= resultado2*Semestre
        resultado=(resultado3)
        }
      //MV-AV
      else if(lista1 == "MV" && lista2 == "AV"){
        resultado1= porcentaje/Mensual
        resultado2 = Math.pow(1+(resultado1),Mensual/Anual)-1
        resultado3= resultado2*Anual
        resultado=(resultado3)
        }
      //Mes Vencido a Efectivo Anua
      else if(lista1 == "MV" && lista2 == "MV"){
         resultado = porcentaje
        }


    //Bimestre
    //Bimestre Vencido a Efectivo Mensual
    if(lista1 == "BV" && lista2 == "MV"){
      resultado1= porcentaje/Bimestre
        resultado2 = Math.pow(1+(resultado1),Bimestre/Mensual)-1
        resultado3= resultado2*Mensual
        resultado=(resultado3)
    }
      //Bimestre Vencido a Efectivo Bimestral
      if(lista1 == "BV" && lista2 == "TV"){
        resultado1= porcentaje/Bimestre
        resultado2 = Math.pow(1+(resultado1),Bimestre/Trimestre)-1
        resultado3= resultado2*Trimestre
        resultado=(resultado3)
        }
      //Bimestre Vencido a Efectivo Trimestral
      else if(lista1 == "BV" && lista2 == "SV"){
        resultado1= porcentaje/Bimestre
        resultado2 = Math.pow(1+(resultado1),Bimestre/Semestre)-1
        resultado3= resultado2*Semestre
        resultado=(resultado3)
        }
      //Bimestre Vencido a Efectivo Semestral
      else if(lista1 == "BV" && lista2 == "AV"){
        resultado1= porcentaje/Bimestre
        resultado2 = Math.pow(1+(resultado1),Bimestre/Anual)-1
        resultado3= resultado2*Anual
        resultado=(resultado3)
        }
      //Bimestre Vencido a Efectivo Anual
      else if(lista1 == "BV" && lista2 == "BV"){
        resultado = porcentaje
        }

    //Trimestre
    //Trimestre Vencido a Efectivo Mensual
    if(lista1 == "TV" && lista2 == "MV"){
      resultado1= porcentaje/Trimestre
        resultado2 = Math.pow(1+(resultado1),Trimestre/Mensual)-1
        resultado3= resultado2*Mensual
        resultado=(resultado3)
    }
      //Trimestre Vencido a Efectivo Bimestral
      if(lista1 == "TV" && lista2 == "BV"){
        resultado1= porcentaje/Trimestre
        resultado2 = Math.pow(1+(resultado1),Trimestre/Bimestre)-1
        resultado3= resultado2*Bimestre
        resultado=(resultado3)
        }
      //Trimestre Vencido a Efectivo Trimestral
      else if(lista1 == "TV" && lista2 == "SV"){
        resultado1= porcentaje/Trimestre
        resultado2 = Math.pow(1+(resultado1),Trimestre/Semestre)-1
        resultado3= resultado2*Semestre
        resultado=(resultado3)
        }
      //Trimestre Vencido a Efectivo Semestral
      else if(lista1 == "TV" && lista2 == "AV"){
        resultado1= porcentaje/Trimestre
        resultado2 = Math.pow(1+(resultado1),Trimestre/Anual)-1
        resultado3= resultado2*Anual
        resultado=(resultado3)
        }
      //Trimestre Vencido a Efectivo Anual
      else if(lista1 == "TV" && lista2 == "TV"){
        resultado = porcentaje
        }

    //Semestre
    //Semestre Vencido a Efectivo Mensual
    if(lista1 == "SV" && lista2 == "MV"){
      resultado1= porcentaje/Semestre
        resultado2 = Math.pow(1+(resultado1),Semestre/Mensual)-1
        resultado3= resultado2*Mensual
        resultado=(resultado3)
    }
      //Semestre Vencido a Efectivo Bimestral
      if(lista1 == "SV" && lista2 == "BV"){
        resultado1= porcentaje/Semestre
        resultado2 = Math.pow(1+(resultado1),Semestre/Bimestre)-1
        resultado3= resultado2*Bimestre
        resultado=(resultado3)
        }
      //Semestre Vencido a Efectivo Trimestral
      else if(lista1 == "SV" && lista2 == "TV"){
        resultado1= porcentaje/Semestre
        
        resultado2 = Math.pow(1+(resultado1),Semestre/Trimestre)-1
        
        resultado3= resultado2*Trimestre
        
        resultado=(resultado3)
        alert(resultado3)
        }
      //Semestre Vencido a Efectivo Semestral
      else if(lista1 == "SV" && lista2 == "AV"){
        resultado1= porcentaje/Semestre
        resultado2 = Math.pow(1+(resultado1),Semestre/Anual)-1
        resultado3= resultado2*Anual
        resultado=(resultado3)
        }
      //Semestre Vencido a Efectivo Anual
      else if(lista1 == "SV" && lista2 == "SV"){
        resultado = porcentaje
        }

    //Año
    //Año Vencido a Efectivo Mensual
    if(lista1 == "AV" && lista2 == "MV"){
      resultado1= porcentaje/Anual
        resultado2 = Math.pow(1+(resultado1),Anual/Mensual)-1
        resultado3= resultado2*Mensual
        resultado=(resultado3)
    }
      //Año Vencido a Efectivo Bimestral
      if(lista1 == "AV" && lista2 == "BV"){
        resultado1= porcentaje/Anual
        resultado2 = Math.pow(1+(resultado1),Anual/Bimestre)-1
        resultado3= resultado2*Bimestre
        resultado=(resultado3)
        }
      //Año Vencido a Efectivo Trimestral
      else if(lista1 == "AV" && lista2 == "TV"){
        resultado1= porcentaje/Anual
        resultado2 = Math.pow(1+(resultado1),Anual/Trimestre)-1
        resultado3= resultado2*Trimestre
        resultado=(resultado3)
        }
      //Año Vencido a Efectivo Semestral
      else if(lista1 == "AV" && lista2 == "SV"){
        resultado1= porcentaje/Anual
        resultado2 = Math.pow(1+(resultado1),Anual/Semestre)-1
        resultado3= resultado2*Semestre
        resultado=(resultado3)
        }
      //Año Vencido a Efectivo Anual
      else if(lista1 == "AV" && lista2 == "AV"){
        resultado = porcentaje
        }

      document.getElementById("resultado").innerHTML = resultado.toFixed(3)*100+"% "+lista2; 
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
