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
    new Menu ("Trilogy","Synergy", 3.99, 25, false),
    new Menu ("Multi-Green","Synergy", 3.99, 100, false),
    new Menu ("All Day IPA","Founders", 5.99, 34, false),
    new Menu ("Two Hearted Ale","Bell's", 4.99, 10, false),
  ]


  dateMessage: string;

  constructor() {
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = currentDate.toLocaleTimeString();
    }, 1000)
  }

  currentTime = new Date();
  minutes: number = this.currentTime.getMinutes();
  time: number = this.currentTime.getHours();
  seconds: number = this.currentTime.getSeconds();

  selectedTime = null;
  happyHour(currentTime) {
    this.selectedTime = true;
    console.log(currentTime);
    let timeNow = currentTime;
    if (currentTime > 12){
      timeNow -= 12;
    }
    console.log(timeNow);
    return timeNow;
  }

  newDrink(name, brand, price) {
    console.log(name, brand, price)
    let pint = 124;
    let low = false;
    let newMenu = new Menu(name, brand, price, pint, low);
    this.menus.push(newMenu)
  }

  selectedMenu = null;
  editMenu(currentMenu){
    this.selectedMenu = currentMenu;
  }

  sellPint() {
    this.selectedMenu.pint -= 1;
    if(this.selectedMenu.pint < 10){
      this.selectedMenu.low = true;
      console.log (this.selectedMenu.low)
    } else {
      this.selectedMenu.low = false;
    }
  }

  priceColor(currentMenu){
   if (currentMenu> 3){
     return "bg-danger";
   } else if (currentMenu > 5) {
     return  "bg-warning";
   } else {
     return "bg-info";
   }
 }


 sortByPrice() {
  let priceArray = []
  let temp = [];

  console.log(this.menus)

  for(let i = 0; i < this.menus.length; i++) {
    priceArray.push(this.menus[i].price)
  }

  let sortedPrice = this.menus.sort(function (a, b) {
    return b.price - a.price;
  });

  this.menus = sortedPrice;
 }

}
