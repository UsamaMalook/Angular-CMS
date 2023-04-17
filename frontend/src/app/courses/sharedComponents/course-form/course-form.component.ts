import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  @Input()
  expectedProp!: {
    title: string;
    btnTitle: string;
    modalId: string;
  };

  courseForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      name: '',
      field: '',
      creditHours: 0,
      lab: false,
    });
  }

  @Output() dataEvent = new EventEmitter();

  toParent() {
    this.dataEvent.emit(this.courseForm.value);
  }
}
