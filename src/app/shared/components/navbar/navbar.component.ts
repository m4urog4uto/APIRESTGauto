import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models';
import links from './nav-items';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  authUser$: Observable<User | null>;
  links = links;

  constructor(
    private authService: AuthService
  ) {
    this.authUser$ = this.authService.getAuthUser();
  }

  logout(): void {
    this.authService.logout();
  }
}
