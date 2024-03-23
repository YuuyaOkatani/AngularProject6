import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Megacena2Component } from './megacena2.component';

describe('Megacena2Component', () => {
  let component: Megacena2Component;
  let fixture: ComponentFixture<Megacena2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Megacena2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Megacena2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
