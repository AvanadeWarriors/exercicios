import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCervejaComponent } from './detalhe-cerveja.component';

describe('DetalheCervejaComponent', () => {
  let component: DetalheCervejaComponent;
  let fixture: ComponentFixture<DetalheCervejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheCervejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCervejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
