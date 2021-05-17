import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennaidistrictComponent } from './chennaidistrict.component';

describe('ChennaidistrictComponent', () => {
  let component: ChennaidistrictComponent;
  let fixture: ComponentFixture<ChennaidistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChennaidistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChennaidistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
