import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuatusahaComponent } from './buatusaha.component';

describe('BuatusahaComponent', () => {
  let component: BuatusahaComponent;
  let fixture: ComponentFixture<BuatusahaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuatusahaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuatusahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
