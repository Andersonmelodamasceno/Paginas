import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private apiUrl = 'https://localhost:7253/api/Feed';

  constructor(private http: HttpClient) {}

  pesquisarPorEmail(email: string): Observable<FeedService | null> {
    return this.http.get<FeedService>(`${this.apiUrl}/${email}`);
  }

  deletarPorEMail(email: string): Observable<any> {
    return this.http.delete<FeedService>(`${this.apiUrl}/${email}`);
  }
}
