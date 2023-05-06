import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/core/models';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nameCtrl = new FormControl('', [Validators.required]);
  surnameCtrl = new FormControl('', [Validators.required]);
  userCtrl = new FormControl('', [Validators.required]);
  passwordCtrl = new FormControl('', [Validators.required]);
  confirmPasswordCtrl = new FormControl('', [Validators.required]);
  emailCtrl = new FormControl('', [Validators.required]);
  roleCtrl = new FormControl('', Validators.required);

  registerForm = new FormGroup({
    name: this.nameCtrl,
    surname: this.surnameCtrl,
    user: this.userCtrl,
    password: this.passwordCtrl,
    confirmPassword: this.confirmPasswordCtrl,
    role: this.roleCtrl,
    email: this.emailCtrl
  })

  roles: string[] = ['Director', 'Profesor'];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    } else {
      this.authService.register(this.registerForm.value as User)
    }
  }

  back(): void {
    this.router.navigate(['login']);
  }
}
