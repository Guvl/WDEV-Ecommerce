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
      new Produto('Caneta',10.00, 'https://encurtador.com.br/jqCN1'),
      new Produto('Caderno',15.00, 'https://encurtador.com.br/kJRV0'),
      new Produto('Caneca',5.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1VqGgDU3kub44Ykh--AMr7jNTTYYJi7UregqjiEVQdlS-WbSH')
    ];


  }

  ngOnInit() {
  }

}
