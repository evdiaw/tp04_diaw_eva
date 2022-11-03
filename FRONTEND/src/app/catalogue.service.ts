import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Catalogue } from './core/Catalogue';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  constructor(private http: HttpClient) {}
  env = environment;

  getCatalogue(): Observable<Catalogue[]> {
    return this.http.get<Catalogue[]>(this.env.catalogue);
  }
}
