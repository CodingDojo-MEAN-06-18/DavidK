import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponenComponent } from './my-componen.component';

describe('MyComponenComponent', () => {
  let component: MyComponenComponent;
  let fixture: ComponentFixture<MyComponenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
