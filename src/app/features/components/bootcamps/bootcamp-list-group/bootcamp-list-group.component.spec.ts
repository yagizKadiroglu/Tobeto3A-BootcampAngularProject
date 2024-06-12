import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampListGroupComponent } from './bootcamp-list-group.component';

describe('BootcampListGroupComponent', () => {
  let component: BootcampListGroupComponent;
  let fixture: ComponentFixture<BootcampListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootcampListGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootcampListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
