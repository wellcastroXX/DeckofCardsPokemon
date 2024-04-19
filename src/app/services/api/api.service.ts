import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private baseUrl = 'https://api.pokemontcg.io/v2';
  private apikey = '739e2ce1-3bbb-4bd8-97ed-0ae9dfaa4521';

  constructor(private http: HttpClient) { }

  call(method: string, endpoint: string, payload?: any): Observable<any> {
    const headers = new HttpHeaders().set('X-Api-Key', this.apikey);
    const url = `${this.baseUrl}/${endpoint}`;

    switch (method.toUpperCase()) {
      case 'GET':
        return this.http.get(url, { headers });
      case 'POST':
        return this.http.post(url, payload, { headers });
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  }
}
