import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  images = [1, 2, 3, 4, 5].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`)
  @ViewChild('mycarousel', { static: true }) carousel: NgbCarousel;

  constructor() {
  }

  ngOnInit(): void {
  }
}
