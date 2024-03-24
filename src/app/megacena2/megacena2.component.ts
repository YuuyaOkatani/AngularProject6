import { Component } from '@angular/core';

@Component({
  selector: 'app-megacena2',
  templateUrl: './megacena2.component.html',
  styleUrl: './megacena2.component.css'
})
export class Megacena2Component {

  valor: number[] = []
  array2: number[] = []
  resultadoArray: number[] =[]
  valor2: string = ''
  numero: number = 0 
  togglar = false

  fechar(){
 
    this.togglar = !this.togglar
    this.valor2 = ''
    this.array2 = []
    this.valor = []
    this.resultadoArray = []
  }


 
  


  sortear(){
    
   


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

    let novoItem = [];
    this.togglar = !this.togglar

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
        for(let i = 0; i < 6; i++){
          if(this.valor.includes(this.array2[i])){
            this.resultadoArray.push(this.array2[i])

          }

        }
        console.log("Números que você acertou: " , this.resultadoArray)
        

        
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

    console.log(this.array2.length)
    console.log(this.valor2.split(',').length)
    console.log(this.valor2)
  
    


   


    


    
    
  }
  


 

  

  
  
}
