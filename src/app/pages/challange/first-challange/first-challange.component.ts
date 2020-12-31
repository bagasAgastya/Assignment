import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-first-challange',
  templateUrl: './first-challange.component.html',
  styleUrls: ['./first-challange.component.scss'],
})
export class FirstChallangeComponent implements OnInit {
  items: any[];
  detailItem: any;
  @ViewChild('detailContent') private detailContent: TemplateRef<any>;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.items = [
      {
        header: false,
        title: 'Some Place 1',
        subTitle: 'New King',
        img:
          'https://cdn.water-sport-bali.com/wp-content/uploads/2020/07/20-Tempat-Wisata-Untuk-Dikunjungi-Bali.jpg',
        hasContent: true,
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero quam, blandit quis mattis et, elementum viverra mi. Ut facilisis facilisis velit, sed dapibus lorem hendrerit eu.',
        hasAction: true,
        action: {
          export: 'export',
          icon: false,
        },
      },
      {
        header: false,
        title: 'Some Place 2',
        subTitle: 'New King',
        img:
          'https://cdn.water-sport-bali.com/wp-content/uploads/2020/07/20-Tempat-Wisata-Untuk-Dikunjungi-Bali.jpg',
        hasContent: false,
        hasAction: true,
        action: {
          export: 'export',
          icon: false,
        },
      },
      {
        header: true,
        headerTitle: 'Some Place 3',
        headerSubTitle: 'New King',
        img:
          'https://cdn.water-sport-bali.com/wp-content/uploads/2020/07/20-Tempat-Wisata-Untuk-Dikunjungi-Bali.jpg',
        hasContent: true,
        hasAction: false,
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero quam, blandit quis mattis et, elementum viverra mi. Ut facilisis facilisis velit, sed dapibus lorem hendrerit eu.',
      },
      {
        header: false,
        img:
          'https://cdn.water-sport-bali.com/wp-content/uploads/2020/07/20-Tempat-Wisata-Untuk-Dikunjungi-Bali.jpg',
        hasContent: false,
        hasAction: true,
        action: {
          export: 'export',
          icon: true,
        },
      },
    ];
  }

  onExport(item) {
    this.detailItem = item;
    this.dialog.open(this.detailContent, {
      maxWidth: '90vh',
      maxHeight: '90vh',
    });
  }
}
