import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesDeleteComponent } from './places-delete.component';

describe('PlacesDeleteComponent', () => {
  let component: PlacesDeleteComponent;
  let fixture: ComponentFixture<PlacesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
