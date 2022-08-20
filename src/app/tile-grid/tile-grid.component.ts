import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-grid',
  templateUrl: './tile-grid.component.html',
  styleUrls: ['./tile-grid.component.scss']
})
export class TileGridComponent implements OnInit {

  numbers: number[] = [];

  constructor() {
    this.numbers = new Array<number>(15)
  }
  ngOnInit(): void {
  }

}
