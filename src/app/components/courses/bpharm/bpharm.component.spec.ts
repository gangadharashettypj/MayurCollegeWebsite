import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpharmComponent } from './bpharm.component';

describe('BpharmComponent', () => {
  let component: BpharmComponent;
  let fixture: ComponentFixture<BpharmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpharmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
