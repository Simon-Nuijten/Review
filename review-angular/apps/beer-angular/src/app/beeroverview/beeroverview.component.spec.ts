import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeroverviewComponent } from './beeroverview.component';

describe('BeeroverviewComponent', () => {
  let component: BeeroverviewComponent;
  let fixture: ComponentFixture<BeeroverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeeroverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BeeroverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
