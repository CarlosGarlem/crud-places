import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesHomeComponent } from './places-home.component';

describe('PlacesHomeComponent', () => {
  let component: PlacesHomeComponent;
  let fixture: ComponentFixture<PlacesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
