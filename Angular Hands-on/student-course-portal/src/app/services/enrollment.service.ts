import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

// Hands-On 6, Task 2, Step 63-64: EnrollmentService injects CourseService (service-to-service DI)
@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private enrolledCourseIds: number[] = [];

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Observable<Course[]> {
    return this.courseService.getCourses().pipe(
      switchMap(async courses => courses.filter(c => this.enrolledCourseIds.includes(c.id)))
    );
  }

  // Hands-On 8, Task 2, Step 87: switchMap cancels the previous inner Observable
  // whenever a new courseId arrives, preventing stale/out-of-order responses.
  getStudentsByCourse(courseId: number): Observable<any> {
    return this.courseService.getCourseById(courseId);
  }
}
