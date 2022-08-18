import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaModuleComponent } from './agenda-module.component';

describe('AgendaModuleComponent', () => {
  let component: AgendaModuleComponent;
  let fixture: ComponentFixture<AgendaModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
