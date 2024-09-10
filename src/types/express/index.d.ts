import { UserDetails } from 'src/common/utils/types';

declare global {
  namespace Express {
    interface User extends UserDetails {}
  }
}
