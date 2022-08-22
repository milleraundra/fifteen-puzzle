import {Component, Inject, OnInit} from '@angular/core';
import {fromEvent, Subscription} from "rxjs";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-tile-grid',
  templateUrl: './tile-grid.component.html',
  styleUrls: ['./tile-grid.component.scss']
})
export class TileGridComponent implements OnInit {

  numbers: number[] = [];
  mousemovement: Subscription = new Subscription();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.numbers = new Array<number>(15);
  }
  ngOnInit(): void {
  }

  mousein() {
    this.mousemovement = fromEvent(this.document, 'mousemove').subscribe(
      next => this.mousemove(next as MouseEvent),
      error => this.error(error),
      () => {}
    )
  }

  mousemove(event: MouseEvent) {
    console.log('mousemove called', event.x, event.y);
  }

  mouseout() {
    console.log('mouseout');
    this.mousemovement.unsubscribe();
  }

  error(event: Event) {
    console.warn('mouse movement events have errored: ', event);
  }

}
