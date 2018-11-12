import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage} from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expenses = [
    {
      date: '2018-10-30',
      amount: 10.3,
      category: 'comida',
      description: 'almoco'
    },
    {
      date: '2018-11-03',
      amount: 4.3,
      category: 'comida',
      description: 'lanche no final da tarde'
    },
    {
      date: '2018-11-05',
      amount: 45.3,
      category: 'comida',
      description: 'supermercado'
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  onItemClick(expense) {
    console.log('item clicado', expense);
    this.navCtrl.push(DetailPage, 
                      { expense: expense});
  }

}
