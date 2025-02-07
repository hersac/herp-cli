import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
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
export class TablaComponent implements AfterViewInit {
  @Input() headers: Array<{ key: string; titulo: string }> = [];
  @Input() data: Array<any> = [];
  @Input() loading: boolean = false;

  @ContentChildren(TemplateRef) templates!: QueryList<TemplateRef<any>>;
  private templateMap: Map<string, TemplateRef<any>> = new Map();

  ngAfterViewInit(): void {
    this.setTemplate();
  }

  getTemplate(name: string): TemplateRef<any> | null {
    return this.templateMap.get(`${name}Template`) || null;
  }

  private setTemplate(): void {
    this.templates.forEach((template, index) => {
      const headerKey = this.headers[index]?.key;
      if (headerKey) {
        this.templateMap.set(headerKey, template);
      }
    });
  }
}
