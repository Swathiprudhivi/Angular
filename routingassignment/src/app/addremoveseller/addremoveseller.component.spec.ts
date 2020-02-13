import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremovesellerComponent } from './addremoveseller.component';

describe('AddremovesellerComponent', () => {
  let component: AddremovesellerComponent;
  let fixture: ComponentFixture<AddremovesellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddremovesellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddremovesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
