import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoadingService } from './services/loading.service';

// Hands-On 1, Task 2, Step 9
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, AsyncPipe],
  template: `
    <app-header></app-header>
    <div *ngIf="loading.isLoading$ | async" class="global-spinner">Loading...</div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .global-spinner {
      position: fixed; top: 0; left: 0; right: 0;
      background: #333; color: #fff; text-align: center; padding: 4px;
      z-index: 999;
    }
  `]
})
export class AppComponent {
  constructor(public loading: LoadingService) {}
}
