import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Hands-On 1, Task 2, Step 7
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav>
      <span class="brand">Student Course Portal</span>
      <a routerLink="/">Home</a>
      <a routerLink="/courses">Courses</a>
      <a routerLink="/profile">Profile</a>
    </nav>
  `,
  styles: [`
    nav { display: flex; gap: 16px; align-items: center; padding: 12px 20px; background: #1f2937; color: #fff; }
    .brand { font-weight: bold; margin-right: 24px; }
    a { color: #fff; text-decoration: none; }
    a:hover { text-decoration: underline; }
  `]
})
export class HeaderComponent {}
