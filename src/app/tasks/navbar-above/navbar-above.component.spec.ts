import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAboveComponent } from './navbar-above.component';

describe('TaskInfoNumbersComponent', () => {
  let component: NavbarAboveComponent;
  let fixture: ComponentFixture<NavbarAboveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarAboveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAboveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
