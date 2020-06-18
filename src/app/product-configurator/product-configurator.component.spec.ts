import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductConfiguratorComponent } from './product-configurator.component';

describe('ProductConfiguratorComponent', () => {
  let component: ProductConfiguratorComponent;
  let fixture: ComponentFixture<ProductConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
