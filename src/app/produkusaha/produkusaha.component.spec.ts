import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukusahaComponent } from './produkusaha.component';

describe('ProdukusahaComponent', () => {
  let component: ProdukusahaComponent;
  let fixture: ComponentFixture<ProdukusahaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdukusahaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukusahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
