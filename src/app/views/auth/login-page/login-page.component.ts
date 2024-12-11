import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ILoginRequest, ITokenResponse } from '../../../models';
import { AuthService } from '../../../services/auth.service';
import { catchError, map } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page-responsive.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  formLogin: FormGroup = new FormBuilder().group({
    email: ['', Validators.required],
    contrasena: ['', Validators.required],
  });

  async ingresar() {
    if (this.formLogin.invalid) {
      return;
    }
    const credenciales: ILoginRequest = this.formLogin.value;

    this.authService
      .login(credenciales)
      .pipe(
        map((token: ITokenResponse) => {
          sessionStorage.setItem('token', token.token);
          this.router.navigate(['/']);
        }),
        catchError((error) => {
          throw new Error(`Error al iniciar sesión: ${error}`);
        })
      )
      .subscribe();
  }
}
