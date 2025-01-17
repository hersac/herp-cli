import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTemplateKey]',
})
export class TemplateKeyDirective {
  @Input('appTemplateKey') key!: string;

  constructor(public template: TemplateRef<any>) {}
}
