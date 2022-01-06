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
    <app-stolen></app-stolen>
    <p>{{ exposedService.introduce() }}</p>
    <p>{{ rootProvidedService.introduce() }}</p>
    <p>{{ encapsulatedService.introduce() }}</p>`,
})
export class OutsideComponent {
  constructor(
    public exposedService: ExposedService,
    public rootProvidedService: RootProvidedService,
    public encapsulatedService: EncapsulatedService
  ) {}
}
