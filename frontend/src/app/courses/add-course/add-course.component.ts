import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  courseForm = new FormGroup({
    name: new FormControl(),
    field: new FormControl(),
    creditHours: new FormControl(),
    lab: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}
}
