import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoEmployeeComponent } from './demo-employee.component';

describe('DemoEmployeeComponent', () => {
  let component: DemoEmployeeComponent;
  let fixture: ComponentFixture<DemoEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
