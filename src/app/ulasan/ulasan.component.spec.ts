import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlasanComponent } from './ulasan.component';

describe('UlasanComponent', () => {
  let component: UlasanComponent;
  let fixture: ComponentFixture<UlasanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlasanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlasanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
