import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from 'src/app/interfaces';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  @Input()
  expectedProp!: {
    id: number;
    title: string;
    btnTitle: string;
    modalId: string;
  };

  courseForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private course: CourseService
  ) {}

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      course_id: -1,
      name: '',
      field: '',
      creditHours: 0,
      lab: false,
    });
  }

  @Output() dataEvent = new EventEmitter();

  toParent() {
    if (this.expectedProp.btnTitle == 'Edit') {
      this.editCourse();
    } else {
      this.dataEvent.emit(this.courseForm.value);
    }
  }

  editCourse() {
    this.course.updateCourse(this.courseForm.value).subscribe((result) => {
      console.log(result);
    });
  }
}
