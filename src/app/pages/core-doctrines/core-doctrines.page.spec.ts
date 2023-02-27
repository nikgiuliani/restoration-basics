import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDoctrinesComponent } from './core-doctrines.page';

describe('CoreDoctrinesComponent', () => {
  let component: CoreDoctrinesComponent;
  let fixture: ComponentFixture<CoreDoctrinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreDoctrinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreDoctrinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
