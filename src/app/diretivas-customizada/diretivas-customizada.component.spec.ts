import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustomizadaComponent } from './diretivas-customizada.component';

describe('DiretivasCustomizadaComponent', () => {
  let component: DiretivasCustomizadaComponent;
  let fixture: ComponentFixture<DiretivasCustomizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivasCustomizadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiretivasCustomizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
