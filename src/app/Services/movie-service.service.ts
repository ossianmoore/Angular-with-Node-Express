import { Injectable } from '@angular/core';
import {Movie} from '../movie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { }

  GetMovieInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/movies');
  }

  AddMovieInformation(title:string,year:string,poster:string):Observable<any>{
    const movie:Movie = {title:title, year:year, poster:poster};
    return this.http.post('http://localhost:4000/api/movies', movie)
  }

}
