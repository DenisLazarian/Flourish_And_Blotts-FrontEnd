import { CanActivateFn } from '@angular/router';

export const validSessionGuard: CanActivateFn = (route, state) => {
  return true;
};
