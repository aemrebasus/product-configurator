import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasSamplesComponent } from './canvas-samples.component';

describe('CanvasSamplesComponent', () => {
  let component: CanvasSamplesComponent;
  let fixture: ComponentFixture<CanvasSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
