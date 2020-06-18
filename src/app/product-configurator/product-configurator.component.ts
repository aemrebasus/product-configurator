import { Component, OnInit } from '@angular/core';
import { getImg } from '../config.assets';

@Component({
  selector: 'app-product-configurator',
  templateUrl: './product-configurator.component.html',
  styleUrls: ['./product-configurator.component.scss']
})
export class ProductConfiguratorComponent implements OnInit {
  currentProduct = getImg('wallet-black.jpg')
  products = [getImg('wallet-black.jpg'), getImg('wallet-brown.jpg')];

  productLabel = {
    top: 20,
    left: 20,
    color: 'white',
    text: 'Name',
    size: 14,
    font: '',
  }




  constructor() { }

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
