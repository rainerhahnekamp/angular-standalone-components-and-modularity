import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncapsulatedComponent } from './encapsulated.component';
import { ExposedComponent } from './exposed.component';
import { ExposedService } from './services/exposed.service';

@NgModule({
  declarations: [EncapsulatedComponent, ExposedComponent],
  imports: [CommonModule],
  exports: [ExposedComponent],
  providers: [ExposedService],
})
export class ModuleModule {}
