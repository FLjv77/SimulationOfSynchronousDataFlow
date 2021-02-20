import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTableComponent } from './work-table.component';

describe('WorkTableComponent', () => {
  let component: WorkTableComponent;
  let fixture: ComponentFixture<WorkTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
