import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  formData = {
    title: 'Add Course',
    btnTitle: 'Add',
    modalId: 'addCourse',
  };

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {}

  recievedData!: {
    name: string;
    field: string;
    creditHours: number;
    lab: boolean;
  };

  recieveData($event: {
    name: string;
    field: string;
    creditHours: number;
    lab: boolean;
  }) {
    this.recievedData = $event;
    // console.log(this.recievedData);
    // this.submitForm(this.recievedData)
    console.log(this.recievedData);
    console.log(
      this.courseService
        .addCourse({ ...this.recievedData })
        .subscribe((result) => {
          console.log(result);
        })
    );
  }
}
