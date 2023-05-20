/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BandListComponent } from './band-list.component';

describe('BandListComponent', () => {
  let component: BandListComponent;
  let fixture: ComponentFixture<BandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
