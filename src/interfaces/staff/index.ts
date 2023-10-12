import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StaffInterface {
  id?: string;
  hire_date?: any;
  termination_date?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface StaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
