import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-contrasena-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './recuperar-contrasena-page.component.html',
  styleUrl: './recuperar-contrasena-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecuperarContrasenaPageComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private formRegistro: FormGroup = new FormBuilder().group({
    email: ['', Validators.required]
  });
}
