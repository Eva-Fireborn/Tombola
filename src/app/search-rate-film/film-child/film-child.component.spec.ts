import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmChildComponent } from './film-child.component';

describe('FilmChildComponent', () => {
  let component: FilmChildComponent;
  let fixture: ComponentFixture<FilmChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
