import { Component } from '@angular/core';
import { EncapsulatedComponent } from './module/encapsulated.component';
import { EncapsulatedService } from './module/services/encapsulated.service';
import { ExposedService } from './module/services/exposed.service';
import { RootProvidedService } from './module/services/root-provided-service';

@Component({
  selector: 'app-outside',
  providers: [EncapsulatedService],
  template: `<h1>Outside Component accessing Module</h1>
    <app-exposed></app-exposed>
    <!--<app-encapsulated></app-encapsulated>-->`,
})
export class OutsideComponent {
  constructor(
    public rootProvidedService: RootProvidedService,
    public exposedService: ExposedService,
    public encapsulatedService: EncapsulatedService
  ) {}
}
