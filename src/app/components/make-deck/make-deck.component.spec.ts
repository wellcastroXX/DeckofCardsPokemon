import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDeckComponent } from './make-deck.component';

describe('MakeDeckComponent', () => {
  let component: MakeDeckComponent;
  let fixture: ComponentFixture<MakeDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeDeckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
