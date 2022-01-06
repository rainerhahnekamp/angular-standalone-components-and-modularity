import { Component } from '@angular/core';
import { EncapsulatedService } from 'projects/lib1/src/lib/services/encapsulated.service';
import { ExposedService, RootProvidedService } from 'lib1';

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
