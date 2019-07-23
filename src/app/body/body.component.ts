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
    this.timeout = false;;
    this.startClicavel = true;
  }

  resetar(): void{
    this.minutos = '25';
    this.segundos = '00';
    this.timeout = true;;
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

  setarTimeout(segundos: number): void {
    if (this.timeout)
      setTimeout(() => { this.decremento() }, segundos);
  }
  ngOnInit() {
  }

}