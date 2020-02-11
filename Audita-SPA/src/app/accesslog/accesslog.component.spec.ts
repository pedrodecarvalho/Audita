/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccesslogComponent } from './accesslog.component';

describe('AccesslogComponent', () => {
  let component: AccesslogComponent;
  let fixture: ComponentFixture<AccesslogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesslogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesslogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
