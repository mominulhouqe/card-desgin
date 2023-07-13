import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoProjectComponent } from './todo-project.component';

describe('TodoProjectComponent', () => {
  let component: TodoProjectComponent;
  let fixture: ComponentFixture<TodoProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoProjectComponent]
    });
    fixture = TestBed.createComponent(TodoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
