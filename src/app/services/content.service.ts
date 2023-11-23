import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private readonly API_URL_GET_CINEMA = "http://localhost:8080/api/Cinema";
  private readonly API_URL_POST_CINEMA = "http://localhost:8080/api/Cinema/addCinema";
  private readonly API_URL_PUT_CINEMA = "http://localhost:8080/api/Cinema/updateById";
  private readonly API_URL_DELETE_CINEMA = "http://localhost:8080/api/Cinema/deleteById";
  private readonly API_URL_GET_MUSIC = "http://localhost:8080/api/Music";
  private readonly API_URL_GET_THEATRE = "http://localhost:8080/api/Theatre";

  /*  updateById/2

  private readonly API_URL_POST_MUSIC = "localhost:8080/api/Music/addMusic";
  private readonly API_URL_DELETE_MUSIC = "localhost:8080/api/Music/deleteById/1";
  private readonly API_URL_POST_THEATRE = "localhost:8080/api/Theatre";
  private readonly API_URL_DELETE_THEATRE = "localhost:8080/api/Theatre/deleteById/1"; */

  constructor(private http: HttpClient) { }

  // CINEMA
  getCinema(): Observable<any> {
    return this.http.get<any>(this.API_URL_GET_CINEMA)}

  postCinema(body: any): Observable<any> {
    return this.http.post<any>(this.API_URL_POST_CINEMA,body);}

  putCinema(id: number,body: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL_PUT_CINEMA}/${id}`,body);    }

  deleteCinema(id: number): Observable<any> {
      return this.http.delete<any>(`${this.API_URL_DELETE_CINEMA}/${id}`);    }

  // MUSIC
  getMusic(): Observable<any> {
    return this.http.get<any>(this.API_URL_GET_MUSIC)}

  // THEATRE
  getTheatre(): Observable<any> {
    return this.http.get<any>(this.API_URL_GET_THEATRE)}


    /*
  postMusic(body: any): Observable<any> {
    return this.http.post<any>(this.API_URL_POST_CINEMA,body);}

  postTheatre(body: any): Observable<any> {
    return this.http.post<any>(this.API_URL_POST_CINEMA,body);}

    */
}
