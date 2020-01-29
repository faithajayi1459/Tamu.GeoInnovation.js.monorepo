import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReplaySubject } from 'rxjs';

import * as guid from 'uuid/v4';

import { CopyComponent } from './copy.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Angulartics2Module } from 'angulartics2';

describe('CopyComponent (isolated)', () => {
  let componentInstance;

  const label = {
    guid: guid(),
    date: Date.now(),
    value: 'Some value'
  };

  beforeEach(async(() => {
    componentInstance = new CopyComponent({
      pageTrack: new ReplaySubject()
    } as any);
  }));

  it('should create', () => {
    expect(componentInstance).toBeDefined();
  });
});

describe('CopyComponent (shallow)', () => {
  let component: CopyComponent;
  let fixture: ComponentFixture<CopyComponent>;

  const label = {
    guid: guid(),
    date: Date.now(),
    value: 'Some value'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angulartics2Module.forRoot(),
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [CopyComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
