import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-challange',
  templateUrl: './third-challange.component.html',
  styleUrls: ['./third-challange.component.scss'],
})
export class ThirdChallangeComponent implements OnInit {
  countLike: number = 5;
  countShare: number = 10;
  constructor() {}

  ngOnInit(): void {}

  likeClicked() {
    this.countLike += 1;
  }
  shareClicked() {
    this.countShare += 1;
  }
}
