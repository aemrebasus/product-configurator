import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-canvas-samples',
  templateUrl: './canvas-samples.component.html',
  styleUrls: ['./canvas-samples.component.scss']
})
export class CanvasSamplesComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  constructor() { }
  ngAfterViewInit(): void {



    const context = this.canvas.nativeElement.getContext('2d');


    // Fill reactancle
    this.fillRect(context, {
      style: 'red',
      x: 0,
      y: 0,
      width: 300,
      height: 300
    });

    // Fill reactancle
    this.fillRect(context, {
      style: 'blue',
      x: 50,
      y: 50,
      width: 20,
      height: 20
    });





    


  }




  fillRect(context: CanvasRenderingContext2D, area: IArea) {
    const { style, x, y, width, height } = area;
    context.fillStyle = style;
    context.fillRect(x, y, width, height);
  }


  ngOnInit(): void {

  }

}


interface IArea {
  style: string;
  x: number;
  y: number;
  width: number;
  height: number;
}