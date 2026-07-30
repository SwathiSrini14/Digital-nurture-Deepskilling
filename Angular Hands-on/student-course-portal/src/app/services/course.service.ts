import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';

// Hands-On 6, Task 1, Step 58: service provided at root -> singleton across the app
// Hands-On 8, Task 1: hardcoded array replaced with real HttpClient calls
@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly baseUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl).pipe(
      // Hands-On 8, Task 2, Step 83: map to transform the response
      map(courses => courses.filter(c => c.credits >= 0)),
      // Hands-On 8, Task 2, Step 85: tap is for side effects/logging only, never for mutating the stream
      tap(courses => console.log('Courses loaded:', courses.length)),
      // Hands-On 8, Task 2, Step 86: retry failed requests up to 2 times before failing
      retry(2),
      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/${id}`);
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, course);
  }

  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${this.baseUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
