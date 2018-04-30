import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbahprofilComponent } from './ubahprofil.component';

describe('UbahprofilComponent', () => {
  let component: UbahprofilComponent;
  let fixture: ComponentFixture<UbahprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbahprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbahprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
