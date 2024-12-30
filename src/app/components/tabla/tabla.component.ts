import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablaComponent {
  @Input() headers: Array<any> = [];
  @Input() data: Array<any> = [];
  @Input() loading: boolean = false;
  @ContentChild('headerTemplate') headerTemplate?: TemplateRef<any>;
  @ContentChild('cellTemplate') cellTemplate?: TemplateRef<any>;
}
