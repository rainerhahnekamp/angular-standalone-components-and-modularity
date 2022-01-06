import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RootProvidedService {
  introduce() {
    return 'this service is provided in root and therefore globally available';
  }
}
