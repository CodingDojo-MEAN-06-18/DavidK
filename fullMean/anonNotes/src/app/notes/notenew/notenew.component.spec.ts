import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotenewComponent } from './notenew.component';

describe('NotenewComponent', () => {
  let component: NotenewComponent;
  let fixture: ComponentFixture<NotenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
