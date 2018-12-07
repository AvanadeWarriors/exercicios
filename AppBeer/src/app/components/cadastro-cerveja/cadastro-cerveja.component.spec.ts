import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCervejaComponent } from './cadastro-cerveja.component';

describe('CadastroCervejaComponent', () => {
  let component: CadastroCervejaComponent;
  let fixture: ComponentFixture<CadastroCervejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroCervejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCervejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
