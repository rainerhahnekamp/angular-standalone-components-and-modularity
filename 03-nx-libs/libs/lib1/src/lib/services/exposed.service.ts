import { Injectable } from '@angular/core';

@Injectable()
export class ExposedService {
  introduce() {
    return 'this service is exposed';
  }
}
