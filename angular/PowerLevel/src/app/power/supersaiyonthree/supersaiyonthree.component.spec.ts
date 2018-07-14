import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyonthreeComponent } from './supersaiyonthree.component';

describe('SupersaiyonthreeComponent', () => {
  let component: SupersaiyonthreeComponent;
  let fixture: ComponentFixture<SupersaiyonthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyonthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyonthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
