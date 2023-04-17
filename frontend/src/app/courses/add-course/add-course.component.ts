import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';
import { Course } from 'src/app/interfaces';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  formData = {
    id: 0,
    title: 'Add Course',
    btnTitle: 'Add',
    modalId: 'addCourse',
  };

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {}

  recievedData!: Course;

  recieveData($event: Course) {
    this.recievedData = $event;
    this.courseService
      .addCourse({ ...this.recievedData })
      .subscribe((result) => {
        console.log(result);
      });
  }
}
