import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';
import { Course } from 'src/app/interfaces';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CourseFormComponent } from '../sharedComponents/course-form/course-form.component';

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
  @ViewChild('addCourse') addCourse!: CourseFormComponent;

  constructor(
    private courseService: CourseService,
    private modalService: NgbModal,
    private courseFormComponent: CourseFormComponent
  ) {}

  ngOnInit(): void {}

  recievedData!: Course;
  closeResult!: string;

  modalOptions: NgbModalOptions = {
    keyboard: false,
    backdrop: 'static',
  };

  open(content: CourseFormComponent) {
    console.log({ content });
    this.modalService.open(this.courseFormComponent, this.modalOptions);
  }

  recieveData($event: Course) {
    this.recievedData = $event;
    this.courseService
      .addCourse({ ...this.recievedData })
      .subscribe((result) => {
        console.log(result);
      });
  }
}
