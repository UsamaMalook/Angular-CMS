import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddCourseComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AddCourseComponent],
})
export class CoursesModule {}
