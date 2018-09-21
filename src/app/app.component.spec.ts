import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MessagesComponent} from './messages/messages.component';
import { Router, RouterOutlet } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { MessageService } from './message.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MessagesComponent
      ],
      imports: [RouterTestingModule ],
      providers: [MessageService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Tour of heroes'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of heroes');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of heroes');
  }));
});
