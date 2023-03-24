import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentplatformComponent } from './recruitmentplatform.component';

describe('RecruitmentplatformComponent', () => {
  let component: RecruitmentplatformComponent;
  let fixture: ComponentFixture<RecruitmentplatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentplatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitmentplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
