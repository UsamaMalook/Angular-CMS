import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  addCourse(values: {
    name: string;
    field: string;
    creditHours: number;
    lab: boolean;
  }) {
    console.log(values);
    return this.http.post('/api/courses/addCourse', JSON.stringify(values));
  }
}
