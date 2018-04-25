import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidhomeComponent } from './androidhome.component';

describe('AndroidhomeComponent', () => {
  let component: AndroidhomeComponent;
  let fixture: ComponentFixture<AndroidhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
