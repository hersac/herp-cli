import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ICrearUsuario } from '../../../models';
import { catchError, map } from 'rxjs';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page-responsive.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  formRegistro: FormGroup = new FormBuilder().group({
    nombre: ['', Validators.required],
    email: ['', Validators.required],
    contrasena: ['', Validators.required],
    confirmarContrasena: ['', Validators.required],
  });

  registrar() {
    if (this.formRegistro.invalid) {
      return;
    }
    const nuevoUsuario: ICrearUsuario = this.formRegistro.value;
    console.log(nuevoUsuario);
    this.authService
      .registro(nuevoUsuario)
      .pipe(
        map(() => {
          this.router.navigate(['/auth/login']);
        }),
        catchError((error) => {
          throw new Error(`Error al registrar usuario: ${error}`);
        })
      )
      .subscribe();
  }
}
