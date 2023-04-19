import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Observable } from 'rxjs';
import { Course } from 'src/app/interfaces';

@Component({
  selector: 'app-course-data-table',
  templateUrl: './course-data-table.component.html',
  styleUrls: ['./course-data-table.component.css'],
})
export class CourseDataTableComponent implements OnInit {
  formData = {
    id: -1,
    title: 'Edit Course',
    btnTitle: 'Edit',
    modalId: 'editCourse',
  };

  courses: Course[] = [];

  selectedCourseId!: number;
  editCourse(courseId: number) {
    this.selectedCourseId = courseId;
  }

  constructor(private courseService: CourseService) {}

  getCourses() {
    this.courseService.getAllCourses().subscribe((res) => {
      res.forEach((x) => {
        this.courses.push(x);
      });
    });
  }

  // editCourse(course) {
  //   OpenModal
  // }

  ngOnInit(): void {
    this.getCourses();
  }
}
