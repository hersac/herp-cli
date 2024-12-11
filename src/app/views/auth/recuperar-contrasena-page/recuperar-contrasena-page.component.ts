import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { catchError, map } from 'rxjs';

@Component({
  selector: 'app-recuperar-contrasena-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './recuperar-contrasena-page.component.html',
  styleUrl: './recuperar-page-responsive.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecuperarContrasenaPageComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  formRecuperar: FormGroup = new FormBuilder().group({
    email: ['', Validators.required],
  });

  recuperarContrasena() {
    if (this.formRecuperar.invalid) {
      return;
    }
    const email: string = this.formRecuperar.value;
    this.authService
      .recuperarContrasena(email)
      .pipe(
        map(() => {
          this.router.navigate(['/auth/login']);
        }),
        catchError((error) => {
          throw new Error(`Error al recuperar contraseña: ${error}`);
        })
      )
      .subscribe();
  }
}
