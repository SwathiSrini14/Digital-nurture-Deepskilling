import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { EnrollmentService } from '../../services/enrollment.service';

// Hands-On 2, Task 2 & 3 (ngOnChanges, @Input/@Output)
// Hands-On 3, Task 1-3 (*ngSwitch, ngClass/ngStyle, custom directive/pipe)
// Hands-On 6, Task 2 (EnrollmentService injection, toggle Enroll/Unenroll)
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('course changed:', changes['course'].previousValue, '->', changes['course'].currentValue);
    }
  }

  get cardClasses() {
    // Hands-On 3, Task 2, Step 32: getter keeps the template free of inline object literals
    return {
      'card--enrolled': this.isEnrolled(),
      'card--full': this.course.credits >= 4,
      expanded: this.isExpanded
    };
  }

  get borderStyle() {
    const colorMap: Record<string, string> = { passed: 'green', failed: 'red', pending: 'grey' };
    return { 'border-left-color': colorMap[this.course.gradeStatus] };
  }

  isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  onEnrollClick(): void {
    this.enrollmentService.enroll(this.course.id);
    this.enrollRequested.emit(this.course.id);
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }
}
