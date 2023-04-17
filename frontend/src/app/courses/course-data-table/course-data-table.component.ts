import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-data-table',
  templateUrl: './course-data-table.component.html',
  styleUrls: ['./course-data-table.component.css'],
})
export class CourseDataTableComponent implements OnInit {
  formData = {
    title: 'Edit Course',
    btnTitle: 'Edit',
    modalId: 'editCourse',
  };

  constructor() {}

  ngOnInit(): void {}
}
