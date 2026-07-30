import { CanDeactivateFn } from '@angular/router';

// Hands-On 7, Task 2, Step 77
// Any component using this guard must implement hasUnsavedChanges().
export interface HasUnsavedChanges {
  hasUnsavedChanges(): boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component) => {
  if (component.hasUnsavedChanges()) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
