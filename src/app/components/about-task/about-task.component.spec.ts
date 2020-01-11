import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutTaskComponent } from './about-task.component';

describe('AboutTaskComponent', () => {
  let component: AboutTaskComponent;
  let fixture: ComponentFixture<AboutTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutTaskComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    fixture = TestBed.createComponent(AboutTaskComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Abuot Task');
  });
});
