import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyontwoComponent } from './supersaiyontwo.component';

describe('SupersaiyontwoComponent', () => {
  let component: SupersaiyontwoComponent;
  let fixture: ComponentFixture<SupersaiyontwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyontwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyontwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
