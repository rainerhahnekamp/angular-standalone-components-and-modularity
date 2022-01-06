import { Component } from '@angular/core';
import { EncapsulatedComponent } from 'projects/lib1/src/lib/encapsulated.component';

@Component({
  selector: 'app-stolen',
  templateUrl: '../../../lib1/src/lib/encapsulated.component.html',
})
export class StolenComponent extends EncapsulatedComponent {}
