import { Component, input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
  valorCompare: number[] = []
  valorCompare2: number[] = []
  resultadoArray: number[] =[]
  inputValue: String ='';
  numero: number = 0 
  togglar = false

  result: any; 

  fechar(){
 
    this.togglar = !this.togglar
    this.result = false
    this.valorCompare = []
    this.valorCompare2 = []
    this.resultadoArray = []
    this.inputValue =''
  }

  draw(){
    
   this.togglar = true


    for (let i = 0; i < 6 ; i++){
    
      this.numero = Math.floor(Math.random() * 60) + 1 
      if(this.valorCompare[i - 1] != this.numero){
        this.valorCompare.push(this.numero)
      }
      else{
        this.numero = Math.floor(Math.random() * 60) + 2
        this.valorCompare.push(this.numero)
      }


      
    }

    this.checker()

    console.log(this.valorCompare)
    
    console.log(this.valorCompare2)
    console.log(this.result)

    if(this.result) {
      for(let item of this.valorCompare){
        if(this.valorCompare2.includes(item)){
          this.resultadoArray.push(item)
        }
      }
      


    }

    
    
  }
  checker(){
    this.valorCompare2 = this.inputValue.split(',').map(item => parseInt(item.trim())); 
    
    this.result = this.valorCompare2.every(item => !isNaN(item));

    if(this.result){
      this.valorCompare2.length > 6? this.result = 'too many': 
      this.valorCompare2.length < 6? this.result = 'less':
      true; 
    }
    else{
      this.result = 'invalid'
    }


  }

}
