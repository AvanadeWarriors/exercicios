import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCervejasComponent } from './listar-cervejas.component';

describe('ListarCervejasComponent', () => {
  let component: ListarCervejasComponent;
  let fixture: ComponentFixture<ListarCervejasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCervejasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCervejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
