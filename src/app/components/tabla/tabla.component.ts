import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  AfterContentInit,
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
  imports: [CommonModule, NgTemplateOutlet],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablaComponent implements AfterContentInit {
  @Input() headers: Array<{ key: string; titulo: string }> = [];
  @Input() data: Array<any> = [];
  @Input() loading: boolean = false;

  @ContentChildren(TemplateRef) templates!: QueryList<TemplateRef<any>>;
  private templateMap: Map<string, TemplateRef<any>> = new Map();

  ngAfterContentInit(): void {
    this.setTemplate();
  }

  getTemplate(name: string): TemplateRef<any> | null {
    return this.templateMap.get(name) || null;
  }

  private setTemplate(): void {
    this.templates.forEach((template) => {
      const templateName = (template as any)._declarationTContainer
        ?.localNames?.[0];
      if (templateName) {
        this.templateMap.set(templateName, template);
      }
    });
  }
}
