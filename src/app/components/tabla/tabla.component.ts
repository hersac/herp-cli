import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablaComponent {
  @Input() headers: Array<any> = [];
  @Input() data: Array<any> = [];
  @Input() loading: boolean = false;
  @ContentChildren(TemplateRef) templates:
    | QueryList<TemplateRef<any>>
    | undefined;

  getHeaderTemplate(headerKey: string): TemplateRef<any> | undefined {
    return this.templates?.find(
      (template: any) => template['id'] === headerKey
    );
  }

  getCellTemplate(headerKey: string): TemplateRef<any> | undefined {
    return this.templates?.find(
      (template: any) => template['id'] === `cell${headerKey}`
    );
  }
}
