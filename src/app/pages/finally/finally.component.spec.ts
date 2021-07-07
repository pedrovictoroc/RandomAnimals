import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinallyComponent } from './finally.component';

describe('FinallyComponent', () => {
  let component: FinallyComponent;
  let fixture: ComponentFixture<FinallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
