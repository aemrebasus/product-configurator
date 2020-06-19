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
    x: 50,
    y: 50,
    width: 30,
    height: 30,
    text: '',
    startAngle: 0,
    endAngle: Math.PI * 2,
    clockwise: false,
    lineWidth: 5,
    strokeStyle: 'blue',
    radius: 30,
    x1: 50,
    y1: 50,
    x2: 100,
    y2: 100,
  }


  constructor() { }
  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
  }




  fillRect() {
    this.context.beginPath();
    this.context.fillStyle = this.config.style;
    this.context.rect(this.config.x, this.config.y, this.config.width, this.config.height);
    if (this.config.stroke) {
      this.context.lineWidth = this.config.lineWidth;
      this.context.strokeStyle = this.config.strokeStyle;
      this.context.stroke();
    }
    this.context.fill();
    this.context.closePath();
  }


  fillArc() {
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
  }


  drawLine() {

    this.context.beginPath();
    this.context.lineWidth = this.config.lineWidth;

    this.context.fillStyle = this.config.style;
    this.context.strokeStyle = this.config.strokeStyle;

    this.context.moveTo(this.config.x1, this.config.y1);

    this.context.lineTo(this.config.x2, this.config.y2);

    this.context.stroke();

    this.context.lineCap = 'round'



    // this.context.closePath();


  }


  ngOnInit(): void {

  }


  render(): void {
    switch (this.config.source) {

      case 'arc':
        this.fillArc();
        break;

      case 'rect':
        this.fillRect();
        break;

      case 'line':
        this.drawLine();
        break;
    }

  }

  clear(): void {
    this.context.clearRect(0, 0, 200, 200);

  }


}
export interface IConfig extends IRect, IArc {
  source?: 'arc' | 'rect' | 'img' | 'video' | 'line';
  text?: string;
}

export interface IShape {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
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