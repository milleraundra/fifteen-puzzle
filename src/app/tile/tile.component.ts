import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() value: number | null = null;
  @Input() top: number = 0;
  @Output() topChange = new EventEmitter<number>();
  @Input() left: number = 0;
  @Output() leftChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
