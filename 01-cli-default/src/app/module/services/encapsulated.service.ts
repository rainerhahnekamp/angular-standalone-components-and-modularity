import { Injectable } from '@angular/core';

@Injectable()
export class EncapsulatedService {
  introduce() {
    return 'this service is encapsulated';
  }
}
