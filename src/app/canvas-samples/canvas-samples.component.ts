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


    // Fill Arc
    this.fillArc(context, {
      x: 100,
      y: 100,
      startAngle: 0,
      endAngle: (Math.PI),
      radius: 30,
      style: 'blue',
      clockwise: false
    });


  }




  fillRect(context: CanvasRenderingContext2D, area: IRect) {
    const { style, x, y, width, height } = area;
    context.fillStyle = style;
    context.fillRect(x, y, width, height);
  }


  fillArc(context: CanvasRenderingContext2D, arc: IArc) {
    context.arc(arc.x, arc.y, arc.radius, arc.startAngle, arc.endAngle, arc.clockwise);
    context.fill();
  }



  ngOnInit(): void {

  }

}
export interface IShape {
  style: string;
  x: number;
  y: number;
}

export interface IRect extends IShape {
  width: number;
  height: number;
}

export interface IArc extends IShape {
  radius: number;
  startAngle: number;
  endAngle: number;
  clockwise: boolean;
}