import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctrinePopoverComponent } from './doctrine-popover.component';

describe('DoctrinePopoverComponent', () => {
  let component: DoctrinePopoverComponent;
  let fixture: ComponentFixture<DoctrinePopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctrinePopoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctrinePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
