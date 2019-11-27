import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // teste = 'ola mundo';

  produtos;

  constructor() { 
    this.produtos = [
      new Produto('Caneta',10.00),
      new Produto('Caderno',15.00),
      new Produto('Caneca',5.00)
    ];


  }

  ngOnInit() {
  }

}
