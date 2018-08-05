import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceoffComponent } from './faceoff.component';

describe('FaceoffComponent', () => {
  let component: FaceoffComponent;
  let fixture: ComponentFixture<FaceoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
