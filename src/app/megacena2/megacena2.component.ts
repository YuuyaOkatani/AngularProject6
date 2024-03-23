import { Component } from '@angular/core';

@Component({
  selector: 'app-megacena2',
  templateUrl: './megacena2.component.html',
  styleUrl: './megacena2.component.css'
})
export class Megacena2Component {

  valor: number[] = []
  array2: number[] = []
  valor2: string = ''
  numero: number = 0 

 
  


  testarAleatorio(){
    this.valor = []
    

    for (let i = 0; i < 6 ; i++){
    
      this.numero = Math.floor(Math.random() * 60) + 1 
      
      if(this.valor[i-1] != this.numero){
        this.valor.push(this.numero)
      }
      else{
        this.numero = 1
        this.valor.push(this.numero)

      }
      
      



    }
    console.log(this.valor)
  }


  verificar(){
   
    let novoItem = [];
    if(this.valor2.trim() !== ''){
      if(this.valor2.trim().split(',').length == 6){
        novoItem =  this.valor2.split(',').map(item => parseInt(item.trim())); 
        this.array2 = novoItem
        if(this.valor.join('') === this.array2.join('')){
          console.log("Deu certo")

          // colocar o a condição aqui
        }
        else{
          console.log("Está incorreto")
          // colocar a condição aqui 
        }
      }
      else if(this.valor2.trim().split(',').length > 6){
        console.log("Você colocou elementos demais")
        // colocar aviso, fazer pop up
      }
      else{
        console.log("Voce não colocou elementos o suficiente")
        // fazer outro pop up

      } 
 
    }
    else{
      console.log("Voce não colocou elementos o suficiente")
      // fazer outro pop up 
    }

  }

  

  
  
}
