import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SomeLibComponent} from 'some-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SomeLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'main-project';
}
