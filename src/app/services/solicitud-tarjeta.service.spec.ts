import { TestBed } from '@angular/core/testing';

import { SolicitudTarjetaService } from './solicitud-tarjeta.service';

describe('SolicitudTarjetaService', () => {
  let service: SolicitudTarjetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudTarjetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
