import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NerwsComponent } from './nerws.component';

describe('NerwsComponent', () => {
  let component: NerwsComponent;
  let fixture: ComponentFixture<NerwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NerwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NerwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
