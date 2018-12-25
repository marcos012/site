import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreProjectsComponent } from './more-projects.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterLinkStubDirective } from '../shared/testing';

describe('MoreProjectsComponent', () => {
  let component: MoreProjectsComponent;
  let fixture: ComponentFixture<MoreProjectsComponent>;
  let debug: DebugElement;
  let htmlElemet: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreProjectsComponent, RouterLinkStubDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve conter o titulo correto', () => {
    fixture.detectChanges();

    debug = fixture.debugElement.query(By.css('h2'));
    htmlElemet = debug.nativeElement;

    expect(htmlElemet.textContent).toContain('Projetos');
  });
});
