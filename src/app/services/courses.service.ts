import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../model/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url: string = "https://webbutveckling.miun.se/files/ramschema_ht23.json";

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.url);

  }
}
