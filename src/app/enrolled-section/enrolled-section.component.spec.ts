import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledSectionComponent } from './enrolled-section.component';

describe('EnrolledSectionComponent', () => {
  let component: EnrolledSectionComponent;
  let fixture: ComponentFixture<EnrolledSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
