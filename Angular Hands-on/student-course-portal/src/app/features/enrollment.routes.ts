import { Routes } from '@angular/router';
import { EnrollmentFormComponent } from '../pages/enrollment-form/enrollment-form.component';
import { ReactiveEnrollmentFormComponent } from '../pages/reactive-enrollment-form/reactive-enrollment-form.component';
import { unsavedChangesGuard } from '../guards/unsaved-changes.guard';

// Hands-On 7, Task 2, Step 73: this whole file is lazy-loaded as a separate
// JS chunk, only downloaded the first time the user navigates to /enroll.
export const enrollmentRoutes: Routes = [
  { path: '', component: EnrollmentFormComponent },
  { path: 'reactive', component: ReactiveEnrollmentFormComponent, canDeactivate: [unsavedChangesGuard] }
];
