import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembelianComponent } from './pembelian.component';

describe('PembelianComponent', () => {
  let component: PembelianComponent;
  let fixture: ComponentFixture<PembelianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembelianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembelianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
