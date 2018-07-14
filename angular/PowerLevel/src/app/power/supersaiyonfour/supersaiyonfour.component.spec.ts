import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyonfourComponent } from './supersaiyonfour.component';

describe('SupersaiyonfourComponent', () => {
  let component: SupersaiyonfourComponent;
  let fixture: ComponentFixture<SupersaiyonfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyonfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyonfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
