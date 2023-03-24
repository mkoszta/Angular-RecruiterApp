import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewapplicantdialogComponent } from './newapplicantdialog.component';

describe('NewapplicantdialogComponent', () => {
  let component: NewapplicantdialogComponent;
  let fixture: ComponentFixture<NewapplicantdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewapplicantdialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewapplicantdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
