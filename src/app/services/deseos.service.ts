import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  Listas: Lista[] = [];
  constructor() { 
      console.log('Servicio iniciado');
}
}