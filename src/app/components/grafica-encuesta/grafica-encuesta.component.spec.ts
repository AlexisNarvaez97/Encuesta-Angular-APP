import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaEncuestaComponent } from './grafica-encuesta.component';

describe('GraficaEncuestaComponent', () => {
  let component: GraficaEncuestaComponent;
  let fixture: ComponentFixture<GraficaEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
