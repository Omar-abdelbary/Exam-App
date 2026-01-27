import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarstudentComponent } from './sidebarstudent.component';

describe('SidebarstudentComponent', () => {
  let component: SidebarstudentComponent;
  let fixture: ComponentFixture<SidebarstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarstudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
