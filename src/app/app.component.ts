import { Component } from '@angular/core';
import { Menu } from './models/tap-room.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tap-room';
  menus:  Menu [] = [
    new Menu ("ginger","Dr.Kombucha", 4.99),
    new Menu ("superBerry","Dr.Kombucha", 4.99),
    new Menu ("trilogy","Synergy", 5.99),
  ]

  newDrink(name, brand, price) {
    console.log(name, brand, price)
    let newMenu = new Menu(name, brand, price);
    this.menus.push(newMenu)
  }

}
