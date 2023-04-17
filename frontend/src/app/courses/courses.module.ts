import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseFormComponent } from './sharedComponents/course-form/course-form.component';
import { CourseFilterComponent } from './course-filter/course-filter.component';
import { CourseDataTableComponent } from './course-data-table/course-data-table.component';
import { CoursesDashboardComponent } from './courses-dashboard/courses-dashboard.component';

@NgModule({
  declarations: [
    AddCourseComponent,
    CourseListComponent,
    CourseFormComponent,
    CourseFilterComponent,
    CourseDataTableComponent,
    CoursesDashboardComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    AddCourseComponent,
    CourseDataTableComponent,
    CoursesDashboardComponent,
  ],
})
export class CoursesModule {}
