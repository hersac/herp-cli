import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faGear, faSliders } from '@fortawesome/free-solid-svg-icons';

import { menu } from '../../constants/sidebar.dict';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  faUser = faUser;
  faGear = faGear;
  faSliders = faSliders;

  menu = menu;

  @Output() seleccionar = new EventEmitter();

  seleccionarModulo(modulo: any) {
    this.seleccionar.emit(modulo);
  }
}
