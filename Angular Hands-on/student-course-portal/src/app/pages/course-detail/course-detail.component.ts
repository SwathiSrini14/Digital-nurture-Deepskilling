import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

// Hands-On 7, Task 1, Step 69
@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="course">
      <h2>{{ course.name }}</h2>
      <p>Code: {{ course.code }}</p>
      <p>Credits: {{ course.credits }}</p>
      <p>Status: {{ course.gradeStatus }}</p>
    </div>
    <p *ngIf="!course">Course not found.</p>
  `
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(id).subscribe(course => (this.course = course));
  }
}
