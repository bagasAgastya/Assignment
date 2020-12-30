import { Component, OnInit } from '@angular/core';
import { ItemListComponent, Item } from './services/junior-data';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-angular-first',
  templateUrl: './angular-first.component.html',
  styleUrls: ['./angular-first.component.scss'],
})
export class AngularFirstComponent implements OnInit {
  items: Item[];
  selectedItems: Item[] = [];
  totalItems: number = 0;
  totalPrices: number = 0;
  panelOpenState: boolean = false;
  availableGold: number = 1000;
  constructor(public listItem: ItemListComponent) {}

  ngOnInit() {
    this.items = this.listItem.getItem();
  }

  onAddCart(item: Item) {
    const isAdded = this.selectedItems.includes(item);
    if (!isAdded) this.selectedItems.push(item);
    else
      this.selectedItems = this.selectedItems.filter(
        (i) => i.name !== item.name
      );
    this.totalPrices = this.calculatePrice(this.selectedItems);
    this.availableGold -= this.totalPrices;
    this.totalItems = this.selectedItems.length;
    const foundIndex = this.items.findIndex((x) => x.name == item.name);
    item.addedToCart = !item.addedToCart;
    this.items[foundIndex] = item;
  }

  calculatePrice(items: Item[]) {
    let totalPrice = 0;
    for (let price in items) {
      {
        totalPrice += items[price].price;
      }
    }
    return totalPrice;
  }

  onBuy() {
    if (this.totalPrices <= 0) {
      Swal.fire(
        'Oopss..',
        'You dont have any item in cart, please add an item to the cart',
        'error'
      );
    } else {
      if (this.totalPrices > 1000) {
        Swal.fire(
          'Oopss..',
          'You dont have enough gold, please do a top up before checkout',
          'error'
        );
      } else {
        Swal.fire(
          'Transaction Success!!',
          'All the items already purchased',
          'success'
        );
        this.resetItem();
      }
    }
  }

  resetItem() {
    this.items = this.items.map((res) => {
      res.addedToCart = false;
      return res;
    });
    this.selectedItems = [];
    this.totalPrices = 0;
    this.totalItems = 0;
  }
}
