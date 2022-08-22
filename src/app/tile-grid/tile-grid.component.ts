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
      next => this.mousemove(next),
      error => this.error(error),
      () => {}
    )
  }

  mousemove(event: Event) {
    console.log('mousemove called', event);
  }

  mouseout() {
    console.log('mouseout');
    this.mousemovement.unsubscribe();
  }

  error(event: Event) {
    console.warn('mouse movement events have errored: ', event);
  }

}
