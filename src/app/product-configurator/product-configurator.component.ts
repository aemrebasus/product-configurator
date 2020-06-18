import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { getImg } from '../config.assets';

@Component({
  selector: 'app-product-configurator',
  templateUrl: './product-configurator.component.html',
  styleUrls: ['./product-configurator.component.scss']
})
export class ProductConfiguratorComponent implements OnInit, AfterViewInit {
  currentProduct = getImg('wallet-black.jpg')
  products = [getImg('wallet-black.jpg'), getImg('wallet-brown.jpg')];

  productLabel = {
    top: 20,
    left: 20,
    color: 'white',
    text: 'Name',
    size: 14,
    font: `\'Bungee Outline\', cursive`,
    letterSpacing: 0,
    transform: 0
  }



  @ViewChild('imgCanvas') canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('imgContainer') imgContainer: ElementRef<HTMLDivElement>;


  constructor() { }

  ngAfterViewInit(): void {
    const context = this.canvas.nativeElement.getContext('2d');
    this.imgContainer.nativeElement.addEventListener('click', () => {
      window.open('', this.canvas.nativeElement.toDataURL());
    })

  }

  ngOnInit(): void {
  }

  select(path) {
    this.currentProduct = path;
  }

  productDetails() {
    return this.products.map(p => {
      return {
        color: p.split('.')[0].split('-')[1],
        path: p
      }
    })
  }


  clearFont() {
    this.productLabel.font = '';
  }


}
