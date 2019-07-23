import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }
  minutos: string = '25';
  segundos: string = '00'
  tipoReset: string = 'po';
  startClicavel: boolean = true;
  timeout: boolean = true;
  cronometro(): void {
    if (this.startClicavel) {
      this.timeout = true;
      this.setarTimeout(60);     
      this.startClicavel = false;
    }
  }

  parar(): void {
    this.timeout = false;
    this.startClicavel = true;
  }

  resetar(): void {
   
    if(this.tipoReset == 'po'){
      this.minutos = '25';
      this.segundos = '00';

    } else if(this.tipoReset == 'g'){
      this.minutos = '10';
      this.segundos = '00';
    }
    else if(this.tipoReset == 'p'){
      this.minutos = '5';
      this.segundos = '00';
    }  

    this.startClicavel = true;
  }

  decremento(): void {

    let segundoAtual: number = parseInt(this.segundos) - 1;

    if (segundoAtual <= 0) {
      if (parseInt(this.minutos) == 0) {
        return;
      }
      this.minutos = (parseInt(this.minutos) - 1).toString();
      this.segundos = '59';
      this.setarTimeout(1000);
      return;
    }

    if (segundoAtual < 10) {
      this.segundos = 0 + segundoAtual.toString();
      this.setarTimeout(1000);
      return;

    }

    this.segundos = segundoAtual.toString();
    this.setarTimeout(1000)
  }

  pequenoIntervalo(): void {
  
    if(this.tipoReset == 'p')
    return;
    this.parar();
    this.tipoReset = 'p';
    setTimeout(() => this.resetar(), 800);   
    
  }

  grandeIntervalo(): void {
    
    if(this.tipoReset == 'g')
    return;
    this.parar();
    this.tipoReset = 'g';
    setTimeout(() => this.resetar(), 800);
  
  }

  pomodoro(): void {
    
    if(this.tipoReset == 'po')
    return;
    this.parar();
    this.tipoReset = 'po';
    setTimeout(() => this.resetar(), 800);
  
  }

  setarTimeout(segundos: number): void {
    if (this.timeout)
      setTimeout(() => { this.decremento() }, segundos);
  }
  ngOnInit() {
  }

}
