import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesReadComponent } from './places-read.component';

describe('PlacesReadComponent', () => {
  let component: PlacesReadComponent;
  let fixture: ComponentFixture<PlacesReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
