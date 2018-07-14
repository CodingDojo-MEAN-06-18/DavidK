import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyonComponent } from './saiyon.component';

describe('SaiyonComponent', () => {
  let component: SaiyonComponent;
  let fixture: ComponentFixture<SaiyonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaiyonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
