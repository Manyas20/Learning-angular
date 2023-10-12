import { Component, Input} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent],
  template: ` <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    
    
    <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
    </main>
    
    `,
  styleUrls: ['./app.component.css'],
  })

export class AppComponent {
  title = 'homes';
}
