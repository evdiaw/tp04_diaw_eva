import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from './core/Produit';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  constructor(private http: HttpClient) {}
  env = environment;

  getProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.env.catalogue);
  }
}
