import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldlogComponent } from './goldlog.component';

describe('GoldlogComponent', () => {
  let component: GoldlogComponent;
  let fixture: ComponentFixture<GoldlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
