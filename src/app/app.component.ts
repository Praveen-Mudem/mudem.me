import { Component } from '@angular/core';

@Component({
  selector: 'mpk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Praveen Kumar Mudem';
  onActivate(event: Event) {
    window.scrollTo(0, 0);
  }
}
