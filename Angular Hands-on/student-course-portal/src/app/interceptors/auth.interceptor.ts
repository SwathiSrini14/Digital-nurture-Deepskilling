import { HttpInterceptorFn } from '@angular/common/http';

// Hands-On 8, Task 3, Step 88: functional interceptor (modern Angular style)
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: { Authorization: 'Bearer mock-token-12345' }
  });
  return next(authReq);
};
