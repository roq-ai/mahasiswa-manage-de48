import { CourseInterface } from 'interfaces/course';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TeacherInterface {
  id?: string;
  hire_date?: any;
  termination_date?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  course?: CourseInterface[];
  user?: UserInterface;
  _count?: {
    course?: number;
  };
}

export interface TeacherGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
