import { CourseInterface } from 'interfaces/course';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  enrollment_date?: any;
  graduation_date?: any;
  course_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  course?: CourseInterface;
  user?: UserInterface;
  _count?: {};
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  course_id?: string;
  user_id?: string;
}
