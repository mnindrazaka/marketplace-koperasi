import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilusahaComponent } from './profilusaha.component';

describe('ProfilusahaComponent', () => {
  let component: ProfilusahaComponent;
  let fixture: ComponentFixture<ProfilusahaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilusahaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilusahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
