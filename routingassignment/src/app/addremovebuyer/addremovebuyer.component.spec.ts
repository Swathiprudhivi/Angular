import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremovebuyerComponent } from './addremovebuyer.component';

describe('AddremovebuyerComponent', () => {
  let component: AddremovebuyerComponent;
  let fixture: ComponentFixture<AddremovebuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddremovebuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddremovebuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
