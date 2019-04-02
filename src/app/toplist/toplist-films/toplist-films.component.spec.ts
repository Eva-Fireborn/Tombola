import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplistFilmsComponent } from './toplist-films.component';

describe('ToplistFilmsComponent', () => {
  let component: ToplistFilmsComponent;
  let fixture: ComponentFixture<ToplistFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToplistFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplistFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
