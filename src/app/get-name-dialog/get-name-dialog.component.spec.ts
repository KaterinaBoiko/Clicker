import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNameDialogComponent } from './get-name-dialog.component';

describe('GetNameDialogComponent', () => {
  let component: GetNameDialogComponent;
  let fixture: ComponentFixture<GetNameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetNameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
