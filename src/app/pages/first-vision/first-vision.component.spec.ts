import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstVisionComponent } from './first-vision.component';

describe('FirstVisionComponent', () => {
  let component: FirstVisionComponent;
  let fixture: ComponentFixture<FirstVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstVisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
