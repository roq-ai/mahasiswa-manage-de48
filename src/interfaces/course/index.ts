import { StudentInterface } from 'interfaces/student';
import { TeacherInterface } from 'interfaces/teacher';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  start_date?: any;
  end_date?: any;
  teacher_id: string;
  created_at?: any;
  updated_at?: any;
  student?: StudentInterface[];
  teacher?: TeacherInterface;
  _count?: {
    student?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  teacher_id?: string;
}
