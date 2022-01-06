import { Component } from '@angular/core';
import { EncapsulatedComponent } from './module/encapsulated.component';

@Component({
  selector: 'app-stolen',
  templateUrl: './module/encapsulated.component.html',
})
export class StolenComponent extends EncapsulatedComponent {}
