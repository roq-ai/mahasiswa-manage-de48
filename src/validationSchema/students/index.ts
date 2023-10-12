import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  enrollment_date: yup.date().nullable(),
  graduation_date: yup.date().nullable(),
  course_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
