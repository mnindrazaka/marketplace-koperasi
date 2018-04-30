import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiusahaComponent } from './informasiusaha.component';

describe('InformasiusahaComponent', () => {
  let component: InformasiusahaComponent;
  let fixture: ComponentFixture<InformasiusahaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformasiusahaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformasiusahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
