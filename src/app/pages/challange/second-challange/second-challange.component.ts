import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-second-challange',
  templateUrl: './second-challange.component.html',
  styleUrls: ['./second-challange.component.scss'],
})
export class SecondChallangeComponent implements OnInit {
  priceList: any[];
  selectedPrice: string = '';
  currency: string = '$';
  dueMonth: string = '/month';
  constructor() {}

  ngOnInit() {
    this.priceList = [
      {
        header: 'BASIC',
        nominal: 4,
        detail: [
          { total: 10, name: 'Project' },
          { total: 10, name: 'Pages' },
          { total: 100, name: 'Mb Disk Space' },
        ],
      },
      {
        header: 'STANDARD',
        nominal: 8,
        subTitle: 'Save 15%',
        detail: [
          { total: 20, name: 'Project' },
          { total: 20, name: 'Pages' },
          { total: 200, name: 'Mb Disk Space' },
        ],
      },
      {
        header: 'ADVANCED',
        nominal: 12,
        detail: [
          { total: 40, name: 'Project' },
          { total: 40, name: 'Pages' },
          { total: 500, name: 'Mb Disk Space' },
        ],
      },
    ];
  }

  onBuy(price) {
    this.selectedPrice = price.header;
    Swal.fire('Congratulation!', 'You buy our service!', 'success');
  }
}
