import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-grid',
  templateUrl: './tile-grid.component.html',
  styleUrls: ['./tile-grid.component.scss']
})
export class TileGridComponent implements OnInit {

  numbers: number[] = [];

  constructor() {
    this.numbers = new Array<number>(15);
  }
  ngOnInit(): void {
  }

}

/*
* Do I try to actually manipulate DOM elements with their values between positions
* Or just update the values at those positions, and animate (review smashingconf css animate)
*/
