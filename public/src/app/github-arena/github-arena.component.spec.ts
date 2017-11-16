import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubArenaComponent } from './github-arena.component';

describe('GithubArenaComponent', () => {
  let component: GithubArenaComponent;
  let fixture: ComponentFixture<GithubArenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubArenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
