import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyonComponent } from './supersaiyon.component';

describe('SupersaiyonComponent', () => {
  let component: SupersaiyonComponent;
  let fixture: ComponentFixture<SupersaiyonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
