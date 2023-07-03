import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://api.themoviedb.org/3/discover/movie';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    const apiHeaders = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWI2N2FhZDY3MDAxNDM0OTQ2ZWY2MDQxNzc4N2Q1YiIsInN1YiI6IjY0OTI1YWFjNGJhNTIyMDBjNTFlNmRlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b8cC_C-9ykQJBAy03DvN85LnrGaVdcGjY9nwiT9DJ60'
  });
  const params = new HttpParams().set('language', 'es');

    return this.http.get<any>(this.urlApi,{ headers: apiHeaders, params });
  }

}
// https://developer.themoviedb.org/reference/genre-movie-list
//https://developer.themoviedb.org/reference/genre-movie-list
