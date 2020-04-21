import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTimerDialogComponent } from './change-timer-dialog.component';

describe('ChangeTimerDialogComponent', () => {
  let component: ChangeTimerDialogComponent;
  let fixture: ComponentFixture<ChangeTimerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTimerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTimerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
