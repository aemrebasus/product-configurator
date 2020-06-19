import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-canvas-samples',
  templateUrl: './canvas-samples.component.html',
  styleUrls: ['./canvas-samples.component.scss']
})
export class CanvasSamplesComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  context: CanvasRenderingContext2D;

  config: IConfig = {
    source: 'arc',
    style: '#00AA00',
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    text: '',
    startAngle: 0,
    endAngle: Math.PI * 2,
    clockwise: false,
    radius: 30,

  }


  constructor() { }
  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
  }




  fillRect(area: IRect) {
    const { style, x, y, width, height } = area;
    this.context.fillStyle = style;
    this.context.fillRect(x, y, width, height);
  }


  fillArc(arc: IArc) {
    this.context.arc(arc.x, arc.y, arc.radius, arc.startAngle, arc.endAngle, arc.clockwise);
    this.context.fill();
  }



  ngOnInit(): void {

  }


  render(): void {
    switch (this.config.source) {

      case 'arc':
        this.context.fillStyle = this.config.style;

        this.context.beginPath();
        this.context.arc(this.config.x, this.config.y, this.config.radius,
          this.config.startAngle, this.config.endAngle, this.config.clockwise);

        if (this.config.stroke) {
          this.context.lineWidth = this.config.lineWidth;
          this.context.strokeStyle = this.config.strokeStyle;
          this.context.stroke();
        }
        this.context.fill();
        this.context.closePath();

        break;

      case 'rect':
        this.context.beginPath();
        this.context.fillStyle = this.config.style;
        this.context.fillRect(this.config.x, this.config.y, this.config.width, this.config.height);
        this.context.closePath();
        break;
    }

  }

  clear(): void {
    this.context.clearRect(0, 0, 200, 200);

  }


}
export interface IConfig extends IRect, IArc {
  source?: 'arc' | 'rect' | 'img' | 'video';
  text?: string;
}

export interface IShape {
  style?: string;
  x?: number;
  y?: number;
  stroke?: boolean;
  strokeStyle?: string;
  lineWidth?: number;
}

export interface IRect extends IShape {
  width?: number;
  height?: number;
}

export interface IArc extends IShape {
  radius?: number;
  startAngle?: number;
  endAngle?: number;
  clockwise?: boolean;
}