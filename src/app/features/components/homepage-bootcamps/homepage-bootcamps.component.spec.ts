import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBootcampsComponent } from './homepage-bootcamps.component';

describe('HomepageBootcampsComponent', () => {
  let component: HomepageBootcampsComponent;
  let fixture: ComponentFixture<HomepageBootcampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageBootcampsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageBootcampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
