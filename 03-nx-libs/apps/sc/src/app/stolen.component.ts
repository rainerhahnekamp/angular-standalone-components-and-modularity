import { Component } from '@angular/core';
import { EncapsulatedComponent } from 'libs/lib1/src/lib/encapsulated.component';

@Component({
  selector: 'app-stolen',
  templateUrl: '../../../../libs/lib1/src/lib/encapsulated.component.html',
})
export class StolenComponent extends EncapsulatedComponent {}
