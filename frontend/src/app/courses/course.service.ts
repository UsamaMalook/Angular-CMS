import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  addCourse(values: Course) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http.post('/api/courses/addCourse', JSON.stringify(values), {
      headers: headers,
    });
  }

  updateCourse(values: Course, courseId: number) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );

    values.course_id = courseId;
    return this.http.put('/api/courses/updateCourse', JSON.stringify(values), {
      headers: headers,
    });
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses/');
  }
}
