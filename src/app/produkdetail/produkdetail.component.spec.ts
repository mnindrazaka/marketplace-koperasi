import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukdetailComponent } from './produkdetail.component';

describe('ProdukdetailComponent', () => {
  let component: ProdukdetailComponent;
  let fixture: ComponentFixture<ProdukdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdukdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
