import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

// Hands-On 6, Task 2, Step 66
@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>My Profile</h2>
    <h3>Enrolled Courses</h3>
    <ul>
      <li *ngFor="let c of (enrolledCourses$ | async)">{{ c.name }} ({{ c.code }})</li>
    </ul>
  `
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses$!: Observable<Course[]>;

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrolledCourses$ = this.enrollmentService.getEnrolledCourses();
  }
}
